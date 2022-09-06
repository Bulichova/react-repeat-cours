import React from 'react'
import { useState, useEffect, useRef } from 'react'
import debounce from 'lodash.debounce'
import { Button } from '../component/Button'
import { InputText } from '../component/Input'
import withLeftSideBar from '../hocs/withLeftSideBar'
import { pexelsReducer } from '../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSearchValueAction,
  setPageValueAction,
  setImagesAction,
  addImagesAction,
} from '../redux/actions'
import {
  searchValueSelector,
  pageValueSelector,
  getImagesSelector,
} from '../redux/selectors'
import styled from 'styled-components'

const StyledImagesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  min-width: 300px;
  width: 100%;
`
const StyledSearch = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  input {
    margin-right: 10px;
    /* display: inline-block; */
  }
`

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
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const search = useSelector(searchValueSelector)
  const page = useSelector(pageValueSelector)
  const images = useSelector(getImagesSelector)

  useEffect(() => {
    // console.log('images', images)
  }, [images])

  // throttle(callback, delay)
  // debounce(callback, delay)

  const handleInputChange = debounce((e) => {
    dispatch(setSearchValueAction(e.target.value))
  }, 1000)

  const searchValue = () => {
    console.log('inputRef', inputRef.current.value)
    getFetch(setImagesAction)
    inputRef.current.value = ''
  }
  const loadMoreImages = () => {
    getFetch(addImagesAction, page)
  }

  const getFetch = (imagesAction, page = 0) => {
    if (!search) return
    let currentPage = page + 1
    let params = `?query=${search}&orientation=portrait&size=smll&per_page=5&page=${currentPage}`
    const url = Base_URL + endPoint + params
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch(imagesAction(data.photos))
        dispatch(setPageValueAction(currentPage))
      })
  }

  return (
    <>
      <section style={{ paddingLeft: '100px' }}>
        <h1>{search || 'search'}</h1>
        <StyledSearch>
          <InputText
            inputRef={inputRef}
            placeholder="enter value"
            handleChange={handleInputChange}
          />
          <Button type="submit" label="search" handleClick={searchValue} />
        </StyledSearch>
        <StyledImagesList>
          {images?.map(({ src: { tiny }, alt, id }) => {
            return (
              <li key={id}>
                <img src={tiny} alt={alt} />
              </li>
            )
          })}
        </StyledImagesList>
        <Button type="button" label="load more" handleClick={loadMoreImages} />
      </section>
    </>
  )
}

export default withLeftSideBar(What_we_do)
