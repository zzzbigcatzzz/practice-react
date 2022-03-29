
const Number = ({ click, equal, input }) => {
  return (
    <div className="number" >
      {
        Array.from(Array(10).keys()).map(v => {
          return (
            <NumberBtn key={v} value={v} click={click} />)
        })
      }
      <NumberBtn value='.' click={click} />
      <button className="btnEqual" onClick={() => equal(input)}>=</button>
    </div >
  )
}

const NumberBtn = (props) => {
  const { value, click } = props
  return (
    <button className="btnNum" value={value} onClick={() => click(value)}>{value}</button>
  )
}

export default Number
