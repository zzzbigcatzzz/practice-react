const CreatePasswordBtn = ({ setValue }) => {
  // eslint-disable-next-line space-before-function-paren
  function genPass(length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@$%^&*_+|:?'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength))
    }
    return result
  }
  return (

    <button id="generateBtn" onClick={() => setValue(genPass(8))}>Tạo Mật Khẩu</button>

  )
}

export default CreatePasswordBtn
