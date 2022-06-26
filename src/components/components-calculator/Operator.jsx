const Operator = ({ click, input, rs }) => {
  const arrOperator = [
    {
      title: '+',
      onClick: click
    },
    {
      title: '-',
      onClick: click
    }, {
      title: '*',
      onClick: click
    }, {
      title: '/',
      onClick: click
    },
    {
      title: 'AC',
      onClick: (input, rs) => {
        input('')
        rs('')
      }
    }
  ]
  return (
    <div className="operator">
      {
        arrOperator.map(v => {
          return (
            <OperatorBtn key={v.title} value={v.title} click={v.onClick} input={input} rs={rs} />
          )
        })
      }
    </div>
  )
}

const OperatorBtn = (prop) => {
  const { value, click, input, rs } = prop
  const handleOp = (click, input, rs, value) => {
    if (['/', '*', '-', '+'].includes(value)) {
      click(value)
    } else {
      click(input, rs)
    }
  }
  return (
    <button className="btnOperator" value={value} onClick={() => handleOp(click, input, rs, value)}>{value}</button>
  )
}

export default Operator
