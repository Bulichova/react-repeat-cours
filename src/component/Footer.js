import React from 'react'
import styled from 'styled-components'
import {Logo} from './Logo'

const StyledFooter = styled.footer`
  background-color: #6d6b67;
`

function Footer() {
  return (
    <StyledFooter>
      <Logo color="white" />
    </StyledFooter>
  )
}

export default Footer
