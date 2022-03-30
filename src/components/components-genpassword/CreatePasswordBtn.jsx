const CreatePasswordBtn = ({ arrFilter, setValue }) => {
  const handleGenPass = () => {
    let result = ''
    arrFilter.forEach((filter) => {
      result = filter.func(result, filter.value)
    })
    setValue(shuffle(result))
  }
  const shuffle = s => {
    const arr = s.split('')

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
    return arr.join('')
  }

  return (
    <button id="generateBtn" onClick={handleGenPass}>Tạo Mật Khẩu</button>

  )
}

export default CreatePasswordBtn
