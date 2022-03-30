const CreatePasswordBtn = ({ arrFilter, setValue }) => {
  const handleGenPass = () => {
    let result = ''
    arrFilter.forEach((filter) => {
      result = filter.func(result, filter.value)
    })
    setValue(result)
  }

  return (
    <button id="generateBtn" onClick={handleGenPass}>Tạo Mật Khẩu</button>

  )
}

export default CreatePasswordBtn
