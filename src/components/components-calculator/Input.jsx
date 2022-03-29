
const Input = (props) => {
  const { result } = props
  return (
    <input id='input' type='text' disabled value={result} />
  )
}
export default Input
