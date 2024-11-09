import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState(""); //holds the city enter by user
  const [weather, setWeather] = useState(null); //holds the weather data get by api

  handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    if (!city) return; //prevent Empty Search

    try {
      const response = await axios.get(`url`);
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };
  return (
    <>
      <div className="weather-container">
        <h1>Weather App!</h1>
        <input
          type="text"
          value={city}
          placeholder="enter city name"
          onChange={handleCityChange}
        />

        <button onClick={handleClick}>Get Weather</button>

        {weather && (
          <div>
            <h2>
              {weather.name}, {weather.country}
            </h2>
            <p>Temprature: {weather.main.temp}degree celcius</p>
            <p>Humidity:{weather.main.humidity} %</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherApp;
