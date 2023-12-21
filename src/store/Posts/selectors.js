import { createSelector } from '@reduxjs/toolkit'


const weatherStoreSelector = (state) => state.weatherSlice

const weatherSelector = createSelector(
    [weatherStoreSelector],
    (weatherStore) => weatherStore.weather
)


export const weatherSel = {
    weatherStoreSelector,
    weatherSelector 
}