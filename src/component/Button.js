import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

const commonStyles = `
background-color: #1f1f1f;
color: #fff;
font-size: 18px;
line-height: 1.56;
padding: 8px 32px;
border-radius:4px;
:disabled {
  background-color: red;
}
:not(:disabled):hover{
  background-color: #fff;
  color: #000;
  transition: all 0.5s;
}
`

const StyledButton = styled.button`
  ${commonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  /* :hover {
    background-color: #fff;
    color: #000;
    transition: all 0.5s;
  } */
`
const StyledLinkButton = styled.a`
  ${commonStyles}
  text-decoration: underline;
`

export function Button({ isDisabled, type, label, handleClick }) {
  const disabled = isDisabled === 'undefined' ? true : isDisabled

  return (
    <StyledButton
      disabled={disabled}
      type={type || 'button'}
      onClick={handleClick}
    >
      {label}
    </StyledButton>
  )
}
export function IconButton({ isDisabled, iconId, type, label, handleClick }) {
  const disabled = isDisabled === undefined ? false : isDisabled

  return (
    <StyledButton
      disabled={disabled}
      type={type || 'button'}
      onClick={handleClick}
    >
      {label}
      <Icon iconId={iconId} />
    </StyledButton>
  )
}

export function Link({ path, label, handleClick }) {
  return (
    <StyledLinkButton href={path || ''} onClick={handleClick}>
      {label}
    </StyledLinkButton>
  )
}
