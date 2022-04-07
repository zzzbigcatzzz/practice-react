import Box1 from '../components-moveobject/Box1'
import Box2 from '../components-moveobject/Box2'
import Arrow from '../components-moveobject/Arrow'

import { useState } from 'react'
export const MoveObject = () => {
  const [box1, setBox1] = useState([
    {
      city: 'Đà Nẵng',
      isCheck: false
    },
    {
      city: 'Vũng tàu',
      isCheck: false
    },
    {
      city: 'TPHCM',
      isCheck: false
    },
    {
      city: 'HÀ nội',
      isCheck: false
    }
  ])
  const [box2, setBox2] = useState([{
    city: 'Đà Nẵng',
    isCheck: false
  }])
  return (
    <div className='move-object'>
      <Box1 box1={box1} setBox1={setBox1} />
      <Arrow box1={box1} setBox1={setBox1} box2={box2} setBox2={setBox2}/>
      <Box2 box2={box2} setBox2={setBox2} />
    </div>
  )
}
