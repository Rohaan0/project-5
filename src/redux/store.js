import { configureStore } from '@reduxjs/toolkit'

import potentialCountriesReducer from "./slices/potentialCountrySlices"

import displayedCountryReducer from './slices/displayCountrySlice'

import isLoadingReducer from './slices/loadingSlice'

export default configureStore({
    reducer: { 
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
        isLoading: isLoadingReducer
    },
})