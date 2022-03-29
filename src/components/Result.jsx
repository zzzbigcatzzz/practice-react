
const Result = ({ rs }) => {
  return (
    <div id="result">
      <label>Kết quả: </label>
      <input className="rsText" type='text' value={rs} disabled />
    </div>
  )
}
export default Result
