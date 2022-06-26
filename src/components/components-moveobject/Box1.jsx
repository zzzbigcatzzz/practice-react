// import { useRef, useEffect } from 'react'
const Box1 = ({ box1, setBox1 }) => {
  const handleClick = (index) => {
    box1.splice(index + 1, 0, {
      city: '',
      isCheck: false
    })
    console.log([...box1])
    setBox1(
      [...box1]
    )
  }

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      box1[index].city = event.target.value
      setBox1(
        [...box1]
      )
    }
  }

  const handleCheckBox = (e, index) => {
    box1[index].isCheck = e.target.checked
    setBox1([...box1])
    // console.log(box1)
  }
  return (
    <div className="box 1">
      <div className="data">
        {
          box1.map((data, index) => {
            if (data.city) {
              return (
                <li key={index}>
                  <input type="checkbox" checked={data.isCheck} onChange={e => handleCheckBox(e, index)} />
                  {data.city}
                  <span onClick={() => handleClick(index)}>+</span>
                </li>
              )
            } else {
              return (
                <li key={index}>
                  <input type="checkbox" disabled/>
                  <input className='new-data' type="text" onKeyDown={e => handleKeyDown(e, index)} />
                </li>
              )
            }
          }
          )
        }
      </div>
      <li>total: {box1.length}</li>
    </div>
  )
}

export default Box1
