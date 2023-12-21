
import { weatherSlice } from "./weatherSlice"

const getWeather = (name) => {
    const {setWeather} = weatherSlice.actions

    return async (dispatch) => {
      await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=1440e396df58db5ef65c19a3c74e1395`)
      .then ((data) => data.json())
      .then ((data) => dispatch(setWeather(data)))
      .catch(err => {
        if (err.response.status === 404) {
          console.log('Please enter the correct name')
        }
        console.log(err);
      })
    } 
}

export const weatherOp = {
  getWeather 
}

/* export default getWeather 

kam senc petqa grel , es depqum weatherOp-@ petqa jnjel u Weather-i index-i
mej vortex graca weatherOp et jnjel,nuyn banna */