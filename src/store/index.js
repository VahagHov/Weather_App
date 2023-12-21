import { configureStore  } from '@reduxjs/toolkit'
import { weatherSlice } from './Posts/weatherSlice'

export const store = configureStore ({
    reducer: {
        weatherSlice: weatherSlice.reducer
    }
})

