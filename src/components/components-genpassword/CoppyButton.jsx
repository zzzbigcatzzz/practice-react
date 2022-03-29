import { useState } from 'react'
const CoppyButton = ({ value }) => {
  const [btnValue, setBtnValue] = useState(true)
  const handleCopy = () => {
    setBtnValue(!btnValue)
    if (btnValue) {
      navigator.clipboard.writeText(value)
    }
  }
  return (

    <button id="copy" onClick={handleCopy} style={{
      backgroundColor: btnValue ? '#3C0484' : '#8C8C8C'

    }}>{btnValue ? 'COPY' : 'COPIED'}</button>

  )
}

export default CoppyButton
