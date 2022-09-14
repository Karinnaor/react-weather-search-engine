import React, { useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";

import "./styles.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d17c0b6f9b7892d1031924e49e1880fe&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBox"
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit">Let's go! </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h3>
          It is currently {weather.description} with{" "}
          {Math.round(weather.temperature)}°C in {city}
        </h3>
        <ul>
          <li> Humidity: {weather.humidity}% </li>
          <li> Wind: {Math.round(weather.wind)} KpH </li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
