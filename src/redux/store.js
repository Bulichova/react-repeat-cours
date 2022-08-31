import { configureStore } from '@reduxjs/toolkit'
import { pexelsReducer } from './reducers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'PEXELS',
  storage,
  // whileList: [],
  // blackList: [],
}

const persistedReducer = persistReducer(persistConfig, pexelsReducer)

export const globalStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE],
      },
    }),
  //   devTools: '',
  //   preloadedState,
  //   enhancers: () => {},
})
// console.log('globalStore', globalStore)

//STATE =GLOBAL{}
// const state = createStore(reducer) {
//   searchvalue: '', // searchValueReducer===function
//   pexelData: [], // pexelDataReducer
// }
export const persistor = persistStore(globalStore)
