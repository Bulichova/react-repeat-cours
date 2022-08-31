import { createSelector } from '@reduxjs/toolkit'

export const searchValueSelector = (state) => state.searchValue
// console.log(searchValue())

export const getImagesSelector = (state)=> state.images
export const getSearchValue = createSelector([], () => {})
