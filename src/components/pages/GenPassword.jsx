import React from 'react'
import DisplayPassword from '../components-genpassword/DisplayPassword.jsx'
import CoppyButton from '../components-genpassword/CoppyButton.jsx'
import FilterPassword from '../components-genpassword/FilterPassword.jsx'
import CreatePasswordBtn from '../components-genpassword/CreatePasswordBtn.jsx'
import '../../styles/components/genpassword.scss'
export const GenPassword = () => {
  return (
    <div className='genpass'>
      <div className='header'>
        <DisplayPassword />
        <CoppyButton />
      </div>
      <FilterPassword />
      <CreatePasswordBtn />
    </div>
  )
}
