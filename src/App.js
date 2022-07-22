import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import { Button, Link, IconButton } from './component/Button'
import styled from 'styled-components'
const navLinks = [
  { id: '1', label: 'Our work' },
  { id: '2', label: 'What we do' },
  { id: '3', label: 'About us' },
  { id: '4', label: 'Get in touch' },
]

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

function App() {
  const handleButtonClick = () => {
    console.log('click on BUTTON')
  }
  const handleLinkButtonClick = () => {
    console.log('click on LINK')
  }
  return (
    <div className="App">
      <Header links={navLinks} />
      <ButtonsWrapper>
        <Button label="see all work" handleClick={handleButtonClick} />
        <Link label="get in touch" handleClick={handleLinkButtonClick} />
        <IconButton iconId="close" />
      </ButtonsWrapper>
      <Footer />
    </div>
  )
}

export default App
