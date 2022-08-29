import { createReducer } from '@reduxjs/toolkit'

const initialState = { searchValue: 'kuku' }

export const pexelsReducer = createReducer(initialState, {
  'set/searchValue': (state, action) => {
    // console.log('state', state)
    console.log('action', action)
    return { ...state, searchValue: action.payload }
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
