import { createReducer } from '@reduxjs/toolkit'
import { setSearchValueAction, setImagesAction } from './actions'

const initialState = { searchValue: '', images: [] }

export const pexelsReducer = createReducer(initialState, {
  [setSearchValueAction]: (state, action) => {
    // console.log('state', state)
    console.log('action', action)
    return { ...state, searchValue: action.payload }
  },
  [setImagesAction]: (state, action) => {
    console.log('IMAGES', action.payload)
    return { ...state, images: action.payload }
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
