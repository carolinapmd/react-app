import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    country: "UK",
    temperature: 12,
    maxTemperature: 12,
    minTemperature: 9,
    looksLike: "Cloudy",
    feelsLike: 11,
    humidity: 60,
    wind: 4,
    date: "18th November 2020",
    hour: "10:23",
    longitude: 3,
    latitude: 5,
    looksLikeIcon:
      "https://cdn0.iconfinder.com/data/icons/weaher-forecast/128/weatherForecast-27-512.png"
  };

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <div className="header">
            <p className="date">
              <strong>{weatherData.date}</strong>
            </p>
            <p className="hour">
              <span>Last updated at 🕖</span>
              <span>{weatherData.hour}</span>
            </p>
          </div>
          <div className="search">
            <div className="search-engine">
              <form>
                <label for="enter-city">Check the weather in...</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter city here"
                  autoComplete="off"
                />
                <button type="submit" className="btn btn-light">
                  <i className="fas fa-search-location"></i>
                </button>
                <button type="button" className="btn btn-light">
                  <i className="far fa-compass"></i>
                </button>
              </form>
              <div className="coordinates">
                <i className="fas fa-map-marker-alt"></i> Decimal coordinates:
                <span> {weatherData.latitude}</span>
                <span> ; </span>
                <span>{weatherData.longitude}</span>
              </div>
            </div>
          </div>
          <div className="chosen-city">
            <div className="row">
              <div className="col-3">
                <hr />
              </div>
              <div className="col-3 location">
                <h1 className="city">{weatherData.city}</h1>
                <h2 className="country">{weatherData.country}</h2>
              </div>
              <div className="col-3 temperature">
                <span className="temperature-value">
                  {weatherData.temperature}
                </span>
                <span className="celsius celsiusUnit"> ºC</span>
                <div className="maxMinTemp">
                  max:
                  <strong>
                    <span> {weatherData.maxTemperature} </span>
                  </strong>
                  <span className="unit celsiusUnit"> ºC | </span>min:
                  <strong>
                    <span> {weatherData.minTemperature} </span>
                  </strong>
                  <span className="unit celsiusUnit"> ºC</span>
                </div>
              </div>
              <div className="col-3">
                <hr />
              </div>
            </div>
          </div>
          <div className="weather-today">
            <h3>
              Today in
              <strong>
                <span> {weatherData.city}</span>
              </strong>
            </h3>
            <div className="row">
              <div className="col">
                <p className="parameter">Looks like:</p>
                <img
                  src={weatherData.looksLikeIcon}
                  alt=""
                  className="weatherIcon"
                />
                <p className="weatherDescription">{weatherData.looksLike}</p>
              </div>
              <div className="col">
                <p className="parameter">Feels like:</p>
                <br />
                <span className="parameter-value">{weatherData.feelsLike}</span>
                <span className="parameter-unit celsiusUnit">ºC</span>
                <br />
                <i className="fas fa-temperature-low"></i>
              </div>
              <div className="col">
                <p className="parameter">Humidity:</p>
                <br />
                <span className="parameter-value">{weatherData.humidity}</span>
                <span className="parameter-unit">%</span>
                <br />
                <i className="fas fa-tint"></i>
              </div>
              <div className="col">
                <p className="parameter">Wind:</p>
                <br />
                <span className="parameter-value">{weatherData.wind}</span>
                <span className="parameter-unit">km/h</span>
                <br />
                <i className="fas fa-wind"></i>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
      <p class="openSource"><a href="https://github.com/carolinapmd/my-first-app" target="_blank">Open-source code</a>, by Carolina Domingues 👩🏻‍💻</p>
    </div>
  );
}
