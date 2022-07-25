import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import { Button, Link, IconButton } from './component/Button'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About_us from './pages/About_us'
import Get_in_touch from './pages/Get_in_touch'
import Our_Work from './pages/Our_Work'
import What_we_do from './pages/What_we_do'

const navLinks = [
  { id: '1', label: 'Our work', path: 'our-work' },
  { id: '2', label: 'What we do', path: 'what-we-do' },
  { id: '3', label: 'About us', path: 'about-us' },
  { id: '4', label: 'Get in touch', path: 'get-in-touch' },
]

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`

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
    <PageWrapper>
      <Header links={navLinks} />
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About_us />} />
          <Route path="what-we-do" element={<What_we_do />} />
          <Route path="our-work" element={<Our_Work />} />
          <Route path="get-in-touch" element={<Get_in_touch />} />
        </Routes>
      </main>
      <Footer />
    </PageWrapper>
  )
}

export default App
// <ButtonsWrapper>
//   <Button label="see all work" handleClick={handleButtonClick} />
//   <Link label="get in touch" handleClick={handleLinkButtonClick} />
//   <IconButton iconId="close" />
// </ButtonsWrapper>
