export default function Err(props) {
  const errorStyle = {
    textAlign: 'center',
    marginTop: '5%',
  }
  return (
    <div style={errorStyle}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}
