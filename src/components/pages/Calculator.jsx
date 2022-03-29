/* eslint-disable no-eval */
import React from 'react'
import Input from '../components-calculator/Input'
import Result from '../components-calculator/Result'
import Number from '../components-calculator/Number'
import Operator from '../components-calculator/Operator'
import '../../styles/components/calculator.scss'
export const Calculator = () => {
  const [result, setResult] = React.useState('')
  const [rs, setRs] = React.useState('')

  const opr = ['/', '*', '-', '+', '.']
  const handleClickNumberButton = (value) => {
    if (
      (opr.includes(value) && result === '') ||
      (opr.includes(value) && opr.includes(result.slice(-1)))
    ) {
      return
    }
    const r = result + String(value)
    setResult(r)
  }

  const handleEqual = (value) => {
    setRs(eval(value).toString())
  }
  return (
    <div className='calculator'>
      <h2>CALCULATOR</h2>
      <Input result={result} />
      <Result rs={rs} />
      <div className='btn'>
        <Number click={handleClickNumberButton} equal={handleEqual} input={result} />
        <Operator click={handleClickNumberButton} result={setResult} rs={setRs} />
      </div>
    </div>
  )
}
