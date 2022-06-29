const Box2 = ({ box2, setBox2 }) => {
  const handleClick = (index) => {
    box2.splice(index + 1, 0, {
      city: '',
      isCheck: false
    })
    setBox2(
      [...box2]
    )
  }

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      box2[index].city = event.target.value
      setBox2(
        [...box2]
      )
    }
  }

  const handleCheckBox = (e, index) => {
    box2[index].isCheck = e.target.checked
    setBox2([...box2])
    // console.log(box2)
  }
  return (
    <div className="box 2">
      <div className="data">
        {
          box2.map((data, index) => {
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
      <li>total: {box2.length}</li>
    </div>
  )
}

export default Box2
