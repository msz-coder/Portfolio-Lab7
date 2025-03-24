import React, { useEffect, useState, useContext } from "react";
import "./Weather.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Weather() {
  const { isDark } = useContext(StyleContext);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://portfolio-api-backend-0544f6fc6e71.herokuapp.com/api/weather")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setWeather(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch weather:", err);
        setError("Failed to fetch weather data");
      });
  }, []);

  if (error) {
    return <div className="weather-card error">Error: {error}</div>;
  }

  if (!weather) {
    return <div className="weather-card loading">Loading weather...</div>;
  }

  return (
    <div className={isDark ? "weather-card dark-mode" : "weather-card"}>
      <h3>📍 {weather.city}</h3>
      <div className="weather-details">
        <p>🌡️ {weather.temperature}°C</p>
        <p>💧 {weather.humidity}% Humidity</p>
        <p>🌬️ {weather.windSpeed} km/h Wind</p>
      </div>
    </div>
  );
}