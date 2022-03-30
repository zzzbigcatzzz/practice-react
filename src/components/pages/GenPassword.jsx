import React from 'react'
import DisplayPassword from '../components-genpassword/DisplayPassword.jsx'
import CoppyButton from '../components-genpassword/CoppyButton.jsx'
import FilterPassword from '../components-genpassword/FilterPassword.jsx'
import CreatePasswordBtn from '../components-genpassword/CreatePasswordBtn.jsx'
import '../../styles/components/genpassword.scss'
export const GenPassword = () => {
  const [value, setValue] = React.useState('')
  const [arrFilter, setArrFilter] = React.useState(
    [
      {
        id: 1,
        title: 'Độ dài 12 kí tự',
        value: false,
        func: (prevResult, isChecked = false) => {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@$%^&*-+/|:?'
          const r = genPass(isChecked ? 12 : 8, characters)
          return r
        }
      },
      {
        id: 2,
        title: 'Chứa ít Nhất 1 kí tự đặc biệt',
        value: false,
        func: (prevResult, isChecked = false) => {
          if (!isChecked) {
            return prevResult
          }
          const specialCharacters = '~!@$%^&*-+|/:?'
          const char = genPass(1, specialCharacters)
          let result = ''
          if (prevResult) {
            result = prevResult.slice(1, prevResult.length) + char
          }
          console.log(result)
          return result
        }
      },
      {
        id: 3,
        title: 'Chứa ít nhất 1 kí tự viết hoa',
        value: false,
        func: (prevResult, isChecked = false) => {
          if (!isChecked) {
            return prevResult
          }
          const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          const char = genPass(1, uppercaseCharacters)

          let result = ''
          if (prevResult) {
            console.log(prevResult)
            result = prevResult.slice(1, prevResult.length) + char
          }
          return result
        }
      },
      {
        id: 4,
        title: 'Chứa ít nhất 1 kí tự viết thường',
        value: false,
        func: (prevResult, isChecked = false) => {
          if (!isChecked) {
            return prevResult
          }
          const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
          const char = genPass(1, lowercaseCharacters)
          let result = ''
          if (prevResult) {
            result = prevResult.slice(1, prevResult.length) + char
          }
          return result
        }
      },
      {
        id: 5,
        title: 'Chứa ít nhất 1 kí tự là số',
        value: false,
        func: (prevResult, isChecked = false) => {
          if (!isChecked) {
            return prevResult
          }
          const numberCharacters = '0123456789'
          const char = genPass(1, numberCharacters)
          let result = ''
          if (prevResult) {
            result = prevResult.slice(1, prevResult.length) + char
          }
          return result
        }
      }
    ]
  )
  // eslint-disable-next-line space-before-function-paren
  function genPass(length, characters) {
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength))
    }
    return result
  }
  return (
    <div className='genpass'>
      <div className='header'>
        <DisplayPassword value={value} />
        <CoppyButton value={value} />
      </div>
      <FilterPassword arrFilter={arrFilter} setArrFilter={setArrFilter} />
      <CreatePasswordBtn arrFilter={arrFilter} setValue={setValue} />
    </div>
  )
}
