import React, { useEffect } from "react";
import "./Card.css";
import axios from "axios";
const Card = ({ Currweather, location, setLocation }) => {
  let temp = Currweather?.main?.temp;

  let celciustemp = temp ? (temp - 273.15).toFixed(2) : "N/A";

  let img = Currweather?.weather?.[0]?.icon;
  let desc = Currweather?.weather?.[0]?.description;
  let humidity = Currweather?.main?.humidity;
  let wind = Currweather?.wind?.speed;
  let feels_like = Currweather?.main?.feels_like;
  let celcius_feels_like = feels_like
    ? (feels_like - 273.15).toFixed(2)
    : "N/A";

  let city = Currweather?.name;

  return (
    <div className="card">
      <div className="city">{city}</div>
      <div className="icon">
        <img
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
          alt="icon"
        />
      </div>
      <div className="temperature">{celciustemp}°C</div>

      <div className="extras">
        <div className="feels_like">
          <div className="title">Feels Like</div>
          <div className="value">{celcius_feels_like} °C</div>
        </div>
        <div className="humidity">
          <div className="title">Humidity</div>
          <div className="value">{humidity} %</div>
        </div>
        <div className="wind">
          <div className="title">Wind</div>
          <div className="value">{(wind * 3.6).toFixed(2)} Km/h</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
