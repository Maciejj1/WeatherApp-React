import React,{useState} from 'react';
const api = {
  key: "a9a4371aa4aeee3ff6c08dd514926b8e",
  base: "https://api.openweathermap.org/data/2.5/"

}
const Search = () => {
  const [query, setQuery]= useState('');
  const [weather , setWeather]= useState({});
  
  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      })
    }
  }
  const dateBuilder = (d) =>{
    let months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    let days = ["Poniedziałek", "Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return ;
  }
  return <div className={(typeof weather.main != "undefined") ? ((weather.main.date > 11) ? 'morning search' : search): 'search'}>
    <div className='main'>
<input type="text"
placeholder='Wyszukaj Miasto'
className='search-bar'
onChange={e => setQuery(e.target.value)}
value={query}
onKeyPress={search}




/>
</div>
{(typeof weather.main != "undefined") ? (
  <div>
    <div className='city-box'>
      <div className='city'>{weather.name}, {weather.sys.city}</div>
      <div className='date'>{dateBuilder(new Date())}</div>
      </div>
      <div className='wather-box'>
        <div className='temp'>
          {Math.round(weather.main.temp)}°c
        </div>
        <div className='weather'>{weather.weather[0].main}</div>
    </div>
    </div>
       ):('')}
  </div>
};

export default Search;
