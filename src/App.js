import React, { useEffect, useState } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import { Button } from './component/Button'
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
  // CONSTANTS
  const API_KEY = '563492ad6f917000010000019b12c0ae48b44b77908448361ebdac71'
  const Base_URL = 'https://api.pexels.com/v1/'
  const endPoint = 'search'

  // fetch(url,options).then({}=>{}).then({}=>{})

  const options = {
    method: 'GET', // POST | PUT | PATCH | DELETE
    headers: {
      Authorization: API_KEY,
    },
  }
  // CONSTANTS

  // =STATE

  const [currentState, setCurrentState] = useState('start')
  const [userName, setUserName] = useState('Tanya')
  const [isOnline, setIsOnline] = useState(true)
  const [search, setSearch] = useState(null)
  const [kittens, setKittens] = useState([])

  // =STATE

  // ==EFFECTS

  useEffect(() => {
    console.log('Use Effect Initial Load')
  }, []) // first-render

  useEffect(() => {
    console.log('currentState', currentState)
  }, [currentState])

  useEffect(() => {
    console.log('isOnline', isOnline)
  }, [isOnline])

  useEffect(() => {
    console.log('search', search)
  }, [search])

  useEffect(() => {
    console.log('kittens', kittens)
  }, [kittens])

  // ==EFFECTS

  // ===METHODS

  const updateState = () => {
    // console.log('click')
    setCurrentState('stop')
  }

  const toogleStatusisOnline = () => {
    setIsOnline(!isOnline)
  }
  const searchValue = () => {
    if (search) {
      // console.log('search')
      let params = `?query=${search}&orientation=portrait&size=smll&per_page=5`
      const url = Base_URL + endPoint + params
      // console.log('url', url)
      fetch(url, options)
        .then((response) => {
          console.log('response', response)
          return response.json()
        })
        .then((data) => {
          console.log('data', data)
          return data.photos
        })
        .then((kittens) => {
          setKittens(kittens) //rewrite
          //setKittens((prev)=>{return [...prev,...kittens]})
        })
    }
  }
  const handleInputChange = (e) => {
    // console.log('value', e.target.value)
    setSearch(e.target.value)
  }

  // ===METHODS

  return (
    <PageWrapper>
      <Header links={navLinks} />
      <main style={{ flex: '1 0 auto' }}>
        <section>
          <input placeholder="enter value" onChange={handleInputChange} />
          <Button type="submit" label="search" handleClick={searchValue} />
        </section>
        <Button label="click" handleClick={toogleStatusisOnline} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About_us />} />
          <Route path="what-we-do" element={<What_we_do />} />
          <Route path="our-work" element={<Our_Work kittens={kittens} />} />
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
