import React from 'react'

const TextInput = ({ text, setText }) => {
    
    const textChange = (event) => {
        setText(event.target.value)
      }

  return (
    <div>
        <input value={text} onChange={textChange} />
    </div>
  )
}

export default TextInput