import './App.scss';
import CurrentLocation from './components/CurrentLocation';
import DateAndTime from './components/DateAndTime';
  import React,{useState} from 'react';
  import axios from 'axios';
  import { WiWindy } from 'weather-icons-react'
  import { Icon } from '@iconify/react';
  
function App() {
    const [data , setData] = useState({})
    const [location , setLocation] = useState('')
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=881d71da6b2f9965eb67f52c52bbe361
`
    const searchLocation = (event) => {
      if(event.key === 'Enter'){
      axios.get(api).then((response)=>{
        setData(response.data)
       console.log(response.data)
      })
      setLocation('')
    }
    }
    
    
  
  return(
    
  <div className='main-container'>
    <DateAndTime />
  <div className='search-bar'>
      <input  
      className='search-city'
      onKeyPress={searchLocation}
      type="text"
      placeholder="Wyszukaj Miasto"
      value={location}
      onChange={event => setLocation(event.target.value)}
  
      />    </div>
  
    <div className='container'>
      
      <div className='city'>
        <p>{data.name}</p>
      </div>
      <div className='city-temp'>
        {data.main ? <h1>Temperatura: {Math.round(data.main.temp )}°C</h1> : null}
      </div>
      <div className='city-fells-temp'>
        {data.main ? <h2>Odczuwalna temperatura: {Math.round(data.main.feels_like )}°C</h2>: null}
      </div>
      <div className='city-weather-description'>
        {data.weather ? <p>{data.weather[0].main }</p> : null}
      </div>
      
     <div className='city-wind-speed'>
      {data.wind ? <p><Icon icon="uil:wind" color="black" className='wind-icon' /> Wiatr: {Math.round(data.wind.speed)} KM/H</p>: null}
      </div>
    </div> 
  </div>
  )
  };


export default App;
