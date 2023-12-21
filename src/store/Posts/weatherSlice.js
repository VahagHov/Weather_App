
import { initialState } from "./initialState";
import {createSlice} from '@reduxjs/toolkit'
import image_clouds from '../../assets/clouds.png';
import image_cloud from '../../assets/cloud.png';
import image_clear from '../../assets/sunny.png';
import image_rain from '../../assets/rain.png';
import image_drizzle from '../../assets/drizzle.png';
import image_mist from '../../assets/mist.png';
import image_fog from '../../assets/fog.png';
import image_snow from '../../assets/snow.png';

const IMAGES = {
    Clouds: image_clouds,
    Cloud: image_cloud,
    Clear: image_clear,
    Rain: image_rain,
    Drizzle: image_drizzle,
    Mist: image_mist,
    Fog: image_fog,
    Smoke: image_cloud,
    Snow: image_snow,
  }

export const weatherSlice = createSlice ({
    name: 'weatherStore' ,
    initialState ,
    reducers: {
        setWeather: (state , action) => {
            state.weather = {
                ...state.weather,
                celsius: action.payload.main.temp,
                name: action.payload.name,
                humidity: action.payload.main.humidity,
                speed: action.payload.wind.speed,
                image: IMAGES[action.payload.weather[0].main],
              }
        }
    }
})