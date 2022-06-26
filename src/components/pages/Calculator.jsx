/* eslint-disable no-eval */
import React from 'react'
import Input from '../components-calculator/Input'
import Result from '../components-calculator/Result'
import Number from '../components-calculator/Number'
import Operator from '../components-calculator/Operator'
import '../../styles/components/calculator.scss'
export const Calculator = () => {
  const [input, setInput] = React.useState('')
  const [rs, setRs] = React.useState('')

  const opr = ['/', '*', '-', '+', '.']
  const handleClickNumberButton = (value) => {
    if (
      (opr.includes(value) && input === '') ||
      (opr.includes(value) && opr.includes(input.slice(-1)))
    ) {
      return
    }
    const r = input + String(value)
    setInput(r)
  }

  const handleEqual = (value) => {
    setRs(eval(value).toString())
  }
  return (
    <div className='calculator'>
      <h2>CALCULATOR</h2>
      <Input input={input} />
      <Result rs={rs} />
      <div className='btn'>
        <Number click={handleClickNumberButton} equal={handleEqual} input={input} />
        <Operator click={handleClickNumberButton} input={setInput} rs={setRs} />
      </div>
    </div>
  )
}
