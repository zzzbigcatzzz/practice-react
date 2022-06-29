import { useEffect, useState } from 'react'

const CoppyButton = ({ value }) => {
  const [btnValue, setBtnValue] = useState(true)
  const handleCopy = () => {
    if (btnValue) {
      navigator.clipboard.writeText(value)
      setBtnValue(false)
    }
  }
  useEffect(() => {
    if (!btnValue) {
      setTimeout(() => {
        setBtnValue(true)
      }, 2000)
    }
  }, [btnValue])
  return (

    <button id="copy" onClick={handleCopy} style={{
      backgroundColor: btnValue ? '#3C0484' : '#8C8C8C'

    }}>{btnValue ? 'COPY' : 'COPIED'}</button>

  )
}

export default CoppyButton
