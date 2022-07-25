import React from 'react'
import { Logo } from '../component/Logo'
import Navigation from './Navigation'
import styled from 'styled-components'
import { Container } from './styledComponents'

const StyledHeader = styled.header`
  flex: 0 1 auto;
  background-color: aqua;
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 20px;
`

function Header({ links }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo color="black" />
        <Navigation links={links} />
      </HeaderContainer>
    </StyledHeader>
  )
}
export default Header
