
const Input = (props) => {
  const { input } = props
  return (
    <input id='input' type='text' disabled value={input} />
  )
}
export default Input
