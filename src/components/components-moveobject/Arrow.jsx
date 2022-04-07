const Arrow = ({ box1, box2, setBox1, setBox2 }) => {
  const moveRight = () => {
    const newBox1 = box1.filter(item => item.isCheck === false)
    const newBox2 = box1.filter(item => item.isCheck === true)

    newBox2.forEach(element => {
      element.isCheck = false
    })

    setBox2([...box2, ...newBox2])
    setBox1([...newBox1])

    // console.log(box1)
  }
  const moveLeft = () => {
    const newBox2 = box2.filter(item => item.isCheck === false)
    const newBox1 = box2.filter(item => item.isCheck === true)

    newBox1.forEach(element => {
      element.isCheck = false
    })

    setBox2([...newBox2])
    setBox1([...box1, ...newBox1])
  }
  return (
    <div className="arrow">
      <div onClick={moveRight} className="long-arrow-right"></div>
      <div onClick={moveLeft} className="long-arrow-left"></div>
    </div>
  )
}

export default Arrow
