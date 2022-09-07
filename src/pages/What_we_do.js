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
const StyledImegeItem = styled.li`
  position: relative;
  margin-left: 40px;
  margin-bottom: 10px;
  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 20px;
    left: -30px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
`

const StyledButonList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  li {
    margin: 6px;
  }
`
const StyledAuthorButton = styled.button`
  padding: 4px 6px;
  border-radius: 4px;
  border: 2px solid;
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
  const imagesFromStorage = useSelector(getImagesSelector)
  const [authors, setAuthors] = useState({})
  const [imagesForRener, setImagesForRender] = useState(imagesFromStorage || [])
  const [choosedAuthor, setChoosedAuthor] = useState('all')

  useEffect(() => {
    if (choosedAuthor === 'all') {
      setImagesForRender(imagesFromStorage)
    } else {
      const filteredImages = imagesFromStorage.filter((image) => {
        return image.photographer === choosedAuthor
      })
      console.log('filteredImages', filteredImages)
      setImagesForRender(filteredImages)
    }
  }, [choosedAuthor, imagesFromStorage])

  useEffect(() => {
    // console.log('imagesFromStorage', imagesFromStorage)
    const authors = imagesFromStorage.map((image) => image.photographer)
    // console.log('authors', authors)

    const sortedAuthors = authors.reduce((memo, author) => {
      !memo.hasOwnProperty(author) ? (memo[author] = 1) : (memo[author] += 1)
      return memo
    }, {})
    // console.log('sortedAuthors', sortedAuthors)
    setAuthors(sortedAuthors)
  }, [imagesFromStorage])

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
    setChoosedAuthor('all')
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

  const chooseAuthor = (e) => {
    console.log('chooseAuthor', e.target.dataset.value)
    setChoosedAuthor(e.target.dataset.value)
  }

  const isSelectedAuthor=()=>{
    //selected autors button
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
        <div>
          <h3>Photographer</h3>
          <StyledButonList>
            <li key="all">
              <StyledAuthorButton
                onClick={chooseAuthor}
                type="button"
                data-value="all"
              >
                All
              </StyledAuthorButton>
            </li>

            {Object.keys(authors).map((authorName) => {
              return (
                <li key={authorName}>
                  <StyledAuthorButton
                    onClick={chooseAuthor}
                    type="button"
                    data-value={authorName}
                  >
                    {authorName}
                  </StyledAuthorButton>
                </li>
              )
            })}
          </StyledButonList>
        </div>
        <StyledImagesList>
          {imagesForRener?.map(({ src: { tiny }, alt, id, avg_color }) => {
            return (
              <StyledImegeItem key={id} color={avg_color}>
                <img src={tiny} alt={alt} />
              </StyledImegeItem>
            )
          })}
        </StyledImagesList>
        <Button type="button" label="load more" handleClick={loadMoreImages} />
      </section>
    </>
  )
}

export default withLeftSideBar(What_we_do)
