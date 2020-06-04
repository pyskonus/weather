import React, {useState} from 'react';
const api = {
  key: "33d664b74b39068471ee0a7ff58ab004",
  url: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {setWeather(result); setQuery('');});
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

  let dt = new Date();
  let month = dt.getMonth();

  return (
    <div className = {
      ([0,1,2].includes(month)) ?
      'App winter' : ([3,4,5].includes(month)) ?
      'App spring' : ([6,7,8].includes(month)) ?
      'App summer' : 'App autumn'
    }>
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{obtainDate(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)} &deg;C
            </div>
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
