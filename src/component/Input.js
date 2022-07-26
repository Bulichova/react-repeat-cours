import React from 'react'
import styled from 'styled-components'
const StyledInput = styled.input`
  padding: 10px 20px;
  color: blue;
  ::placeholder {
    color: pink;
  }
  border: 1px solid pink;
  border-radius: 4px;
  .success {
    border: 1px solid green;
  }
  .warning {
    border: 1px solid yellow;
  }
  .error {
    border: 1px solid red;
  }
`

export function InputText({ placeholder, handleChange, type, name, inputRef }) {
  //   console.log(placeholder)
  //   console.log(handleChange)
  return (
    <StyledInput
      type={type ? type : 'text'}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      ref={inputRef}
    />
  )
}
