import { createAction } from '@reduxjs/toolkit'

export const setSearchValueAction = createAction('set/searchValue')

export const setPageValueAction = createAction('set/pageValue')

export const setImagesAction = createAction('set/images')

export const addImagesAction = createAction('add/images')

// //ACTIONS

// const action = {
//   type: 'action/name',
//   payload: {} || '' || 0 || null || undefined,
// }

// //OLD CREATING

// // const setSearchValueAction = 'set/searchValue' //type

// // function setValue(value) {
// //   return {
// //     type: setSearchValueAction,
// //     payload: value,
// //   }
// // }
// // setValue('')

// const setSearchValueAction = {
//   type: 'set/searchValue',
//   payload: '',
// }
