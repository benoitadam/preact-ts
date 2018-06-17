import { h, Component, VNode } from 'preact'
import { Tr } from '../translates'

type SliderProps = { children?: VNode[] }
type SliderState = { enter: number; leave: number }
export class Slider extends Component<SliderProps, SliderState> {
  interval: any
  state = {
    enter: -1,
    leave: -1
  }

  componentDidMount() {
    let i = 0

    setTimeout(() => this.setState({ enter: 0 }), 50)

    this.interval = setInterval(() => {
      i++
      const count = this.props.children.length
      this.setState({
        enter: i % count,
        leave: (i - 1) % count
      })
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { children } = this.props
    const { enter, leave } = this.state
    children &&
      children.forEach((child, i) => {
        child.attributes._cls = i === enter ? 'slide-enter ' : i === leave ? 'slide-leave ' : ''
      })
    return <div class="slider">{children}</div>
  }
}

type SlideProps = { image?: string; title?: string; desc?: string; class?: string; children?; _cls?: string }
export const Slide = ({ children, image, title, desc, class: cls, _cls }: SlideProps) => (
  <div class={'slide ' + (_cls || '') + (cls || '')}>
    <div class="slide_bg" style={{ backgroundImage: 'url(' + image + ')' }} />
    <div class="slide_content">
      {title && <Tr class="slide_title" value={title} />}
      {desc && <Tr class="slide_desc" value={desc} />}
      {children}
    </div>
  </div>
)
