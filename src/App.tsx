import React, { useState } from "react";
import FetchWeatherData from "./Api/FetchWeatherData";
import "./App.css";
import dummyData from "./data/data";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Credits from "./pages/credits/Credits";

export const App = () => {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rishabh" component={Credits}/>
      </Switch>
    </Router>
  );
};

export default App;
