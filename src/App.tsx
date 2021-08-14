import React,{useState} from 'react';
import logo from "./logo.svg";
import FetchWeatherData from './Api/FetchWeatherData'
import "./App.css";

export const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e: any) => {
    if (e.key === "Enter") {
      const data = await FetchWeatherData(query);
      setWeather(data);

      setQuery("");
      // console.log(weather.weather);
    }
  };
  return (
    <div className="main-container">
      <h2 className="searchH2">Search any Place</h2>
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
          <div className="city-temp">
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
