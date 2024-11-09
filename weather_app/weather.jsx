import React, { useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState(""); // Holds the city entered by user
  const [weather, setWeather] = useState(null); // Holds the weather data

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }; // Update city on input change

  const fetchWeather = async () => {
    if (!city) return; // Prevent empty search
    try {
      const response = await axios.get(`https:fjdskfjdskfj`);
      setWeather(response.data); // Set weather data if request is successful
    } catch (error) {  // Display error if city is not found
      console.log("the error is :", error);
    }
  };

  return (
    <>
      <div className="weather-container">
        <h1>Weather App!</h1>
        <input
          type="text"
          value="city"
          placeholder="enter city"
          onChange={handleCityChange}
        />

        <button onClick={fetchWeather}>Get Weather</button>
        {weather && (
          <div>
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </>
  );
}
export default WeatherApp;
