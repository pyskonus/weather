import React, {useState} from 'react';
const api = {
  key: "33d664b74b39068471ee0a7ff58ab004",
  url: "https://api.openweathermap.org/data/2.5/"
}

function InThreeDays() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.url}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {setWeather(result); setQuery(''); console.log(result);});
      }
    }
  
  
    const obtainDate = (d) => {
      let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
  
    return (
      
        <div>
          <div className="search-box">
            <input type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
          </div>
          {(typeof weather.list != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.city.name}, {weather.city.country}</div>
              <div className="date">{obtainDate(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.list[22].main.temp)} &deg;C
              </div>
              <div className="weather">
                {weather.list[22].weather[0].main}
              </div>
            </div>
          </div>
          ) : ('')}
          
        </div>
    );
}

export default InThreeDays;
