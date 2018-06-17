import { h, Component, render } from 'preact'
import { a$, b$ } from './subjects'

export default class Comp2 extends Component<{}, {}> {
  subscriptions: any[]

  componentDidMount() {
    console.log('a$', a$)
    this.subscriptions = [
      a$.subscribe(a => {
        console.log('a', a)
        this.setState({ a })
      }),
      b$.subscribe(b => this.setState({ b }))
    ]
  }

  componentWillUnmount() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  render(props, { a, b }) {
    return (
      <div class="comp2">
        <div>value of a : {a}</div>
        <div>value of b : {b}</div>
      </div>
    )
  }
}
