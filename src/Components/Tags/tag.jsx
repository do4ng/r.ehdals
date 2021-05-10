import './style.scss'

export default function Tag(props) {
  return <span className={'tag tag-size-' + props.size}>#{props.text}</span>
}
