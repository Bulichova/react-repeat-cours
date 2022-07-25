import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import { Container } from './styledComponents'
const StyledFooter = styled.footer`
  background-color: #6d6b67;
  flex: 0 1 auto;
`

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo color="white" />
      </Container>
    </StyledFooter>
  )
}

export default Footer
