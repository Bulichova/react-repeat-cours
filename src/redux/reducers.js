import { createReducer } from '@reduxjs/toolkit'
import {
  setSearchValueAction,
  setPageValueAction,
  setImagesAction,
  addImagesAction,
} from './actions'

const initialState = { searchValue: '', page: '', images: [] }

export const pexelsReducer = createReducer(initialState, {
  [setSearchValueAction]: (state, action) => {
    // console.log('action', action)
    return { ...state, searchValue: action.payload }
  },
  [setPageValueAction]: (state, action) => {
    return { ...state, page: action.payload }
  },
  [setImagesAction]: (state, action) => {
    // console.log('IMAGES', action.payload)
    return { ...state, images: action.payload }
  },
  [addImagesAction]: (state, action) => {
    // console.log('payload', action.payload)
    return { ...state, images: [...state.images, ...action.payload] }
  },
})

//REDUCER===function

// function reducer(state = {}, action) {
//     if (action.type) {
//       return {}
//     }
//   }

// export function pexelReducer(state = { searchValue: '' }, action) {
//   switch (action.type) {
//     case 'set/searchValue':
//       return { searchValue: action.payload }
//     default:
//       return state
//   }
// }

// export const pexelReducer = createReducer(initialState, (action) => {
//   console.log('action', action)
//   switch (action.type) {
//     case 'set/searchValue':
//       return { searchValue: action.payload }
//     default:
//       return initialState
//   }
// })
