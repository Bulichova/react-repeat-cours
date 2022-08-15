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
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 20px;
`

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo color="black" />
        <select
          onChange={(e) => {
            console.log('e', e.target)
            console.dir(e.target)
            console.log('value,e.target.value')
            localStorage.setItem('lang',e.target.value)
          }}
        >
          <option value="en">EN</option>
          <option value="uk">UK</option>
          <option value="ru">RU</option>
        </select>
        {/* <Navigation /> */}
      </HeaderContainer>
    </StyledHeader>
  )
}
export default Header
