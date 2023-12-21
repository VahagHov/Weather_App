import SearchIcon from '@mui/icons-material/Search';
import image_2 from '../../assets/humidity.png';
import image_3 from '../../assets/wind.png';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { weatherSel } from '../../store/Posts/selectors';
import { weatherOp } from '../../store/Posts/operations';

export const WeatherApp = () => {

  const [name, setName] = useState('')
  // const [error, seteError] = useState('')

  const weather = useSelector(weatherSel.weatherSelector)
  const dipsatch = useDispatch()

  const onChange = (name) => setName(name.target.value)

  const onAdd = () => {
    if (name !== '') {
      dipsatch(weatherOp.getWeather(name))
    }
    setName('')
  }

  return (
    <div className='weather_background'>
      <div className='container'>
        <div> <Link to='/'>Go back</Link> <br /></div>
        <div className='weather'>
          <div className='search'>
            <input
              value={name}
              type='text'
              placeholder='Enter city'
              onChange={onChange}
            />

            <button onClick={onAdd}><SearchIcon /></button>
          </div>

          {/* <div className='error'> {error} </div> */}

          <div className='winfo'>
            <img className='icon' src={weather.image} alt='' />
            <h1>{Math.round(weather.celsius)}c</h1>
            <h2>{weather.name}</h2>
          </div>

          <div className='details'>
            <div className='col'>
              <img className='icon_2' src={image_2} alt=''></img>
              <div className='humidity'>
                <p>{weather.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className='col'>
              <img className='icon_2' src={image_3} alt=''></img>
              <div className='wind'>
                <p>{Math.round(weather.speed)}km/h</p>
                <p>wind</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

