import { h, Component } from 'preact'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'

import values from './values'

// Display texts in browser console
var texts = []
var indexByText = {}
window['texts'] = texts
setTimeout(() => {
  console.log(JSON.stringify(texts))
}, 2000)

export const language$ = new BehaviorSubject('fr')
export const translates$ = language$.map(language => values[language] || [])

type TextProps = { class?; value: string }
export class Tr extends Component<TextProps, { value: string }> {
  sub
  index
  constructor(props: TextProps) {
    super(props)
    const { value } = props
    this.state = { value }

    // create texts for create translates
    this.index = indexByText[value]
    if (this.index === undefined) {
      indexByText[value] = this.index = texts.length
      texts.push(value)
    }
  }
  componentDidMount() {
    this.sub = translates$.subscribe(translates => {
      var value = translates[this.index]
      if (value !== undefined) {
        this.setState({ value })
      }
    })
  }
  componentWillUnmount() {
    this.sub.unsubscribe()
  }
  render({ class: cls }: TextProps, { value }) {
    return cls ? <span class={cls}>{value}</span> : value
  }
}
