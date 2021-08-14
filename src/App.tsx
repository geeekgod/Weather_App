import React,{useState} from 'react';
import FetchWeatherData from './Api/FetchWeatherData'
import isWeather from './Interface/interface'
import "./App.css";

const dummyData: isWeather = {
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 19.2,
    "feels_like": 19.11,
    "temp_min": 13.7,
    "temp_max": 24.42,
    "pressure": 1019,
    "humidity": 74
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }                         

                        

export const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(dummyData);
  const search = async (e: any) => {
    if (e.key === "Enter") {
      const data: isWeather = await FetchWeatherData(query);
      if(data !== null){
        setWeather(data);
      }
      console.log(data);
      setQuery("");
      console.log(weather.main);
    }
  };
  return (
    <div className="main-container">
      <h2 className="head">Get weather details on search</h2>
      <input
        type="text"
        className="search"
        placeholder="Search any place..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temperature">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }

export default App;
