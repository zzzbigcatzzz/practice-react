const Operator = ({ click, result, rs }) => {
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
      onClick: (result, rs) => {
        result('')
        rs('')
      }
    }
  ]
  return (
    <div className="operator">
      {
        arrOperator.map(v => {
          return (
            <OperatorBtn key={v.title} value={v.title} click={v.onClick} result={result} rs={rs} />
          )
        })
      }
    </div>
  )
}

const OperatorBtn = (prop) => {
  const { value, click, result, rs } = prop
  const handleOp = (click, result, rs, value) => {
    if (['/', '*', '-', '+'].includes(value)) {
      click(value)
    } else {
      click(result, rs)
    }
  }
  return (
    <button className="btnOperator" value={value} onClick={() => handleOp(click, result, rs, value)}>{value}</button>
  )
}

export default Operator
