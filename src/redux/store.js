import { configureStore } from '@reduxjs/toolkit'
import { pexelsReducer } from './reducers'

//STATE =GLOBAL{}
// const state = createStore(reducer) {
//   searchvalue: '', // searchValueReducer===function
//   pexelData: [], // pexelDataReducer
// }

const preloadedState = {
  hello: 'world',
}

export const globalStore = configureStore({
  reducer: pexelsReducer,
  //   middleware: () => {},
  //   devTools: '',
  //   preloadedState,
  //   enhancers: () => {},
})
// console.log('globalStore', globalStore)
