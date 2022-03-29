import React from 'react'
import DisplayPassword from '../components-genpassword/DisplayPassword.jsx'
import CoppyButton from '../components-genpassword/CoppyButton.jsx'
import FilterPassword from '../components-genpassword/FilterPassword.jsx'
import CreatePasswordBtn from '../components-genpassword/CreatePasswordBtn.jsx'
import '../../styles/components/genpassword.scss'
export const GenPassword = () => {
  const [value, setValue] = React.useState('')
  console.log(value)
  return (
    <div className='genpass'>
      <div className='header'>
        <DisplayPassword value={value} />
        <CoppyButton value={value} />
      </div>
      <FilterPassword />
      <CreatePasswordBtn setValue={setValue}/>
    </div>
  )
}
