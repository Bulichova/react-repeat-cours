import React from 'react'
import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { Button } from '../component/Button'
import { InputText } from '../component/Input'
import withLeftSideBar from '../hocs/withLeftSideBar'
import { pexelsReducer } from '../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValueAction, setImagesAction } from '../redux/actions'
import { searchValueSelector, getImagesSelector } from '../redux/selectors'

const API_KEY = '563492ad6f917000010000019b12c0ae48b44b77908448361ebdac71'
const Base_URL = 'https://api.pexels.com/v1/'
const endPoint = 'search'
const options = {
  method: 'GET', // POST | PUT | PATCH | DELETE
  headers: {
    Authorization: API_KEY,
  },
}

function What_we_do() {
  const search = useSelector(searchValueSelector)
  const images = useSelector(getImagesSelector)

  // useEffect(() => {
  //   // console.log('search', search)
  // }, [search])

  // useEffect(() => {
  //   // console.log('kittens', kittens)
  // }, [kittens])

  const dispatch = useDispatch()

  // throttle(callback, delay)
  // debounce(callback, delay)

  const handleInputChange = debounce((e) => {
    dispatch(setSearchValueAction(e.target.value))
  }, 1000)

  const searchValue = () => {
    console.log('search', search)
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
          dispatch(setImagesAction(data.photos))
          return data.photos
        })
    }
  }
  return (
    <>
      {/* <h1>{search || 'search'}</h1> */}
      <section>
        <InputText placeholder="enter value" handleChange={handleInputChange} />
        <Button type="submit" label="search" handleClick={searchValue} />
        <ul>
          {images.map(({ src: { tiny }, alt, id }) => {
            // console.log('kitten', kitten)
            return (
              <li key={id}>
                <img src={tiny} alt={alt} />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default withLeftSideBar(What_we_do)
