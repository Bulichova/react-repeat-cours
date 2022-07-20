import React from 'react'
import { Logo } from '../component/Logo'
import Navigation from './Navigation'

function Header({links}) {
  return (
    <header>
      <Logo color="black" />
      <Navigation links={links} />
    </header>
  )
}
export default Header
