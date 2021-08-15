import React,{useState} from 'react';
import FetchWeatherData from './Api/FetchWeatherData'
import isWeather from './Interface/interface'
import "./App.css";
import dummyData from './data/data';
import Home from './pages/Home';
                        

export const App = () => {
  return (
    <>
      <Home/>
    </>
  );
      }

export default App;
