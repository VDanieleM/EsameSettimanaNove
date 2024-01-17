import React from "react";
import { useLocation } from "react-router-dom";

export default function Risultati() {
  const location = useLocation();
  const { data } = location.state;
  const { forecastData } = location.state;
  console.log(forecastData);

  return (
    <div className="Risultati">
      <div className="Container">
        <div className="Main">
          <div className="Locazione">
            <p>{data?.name}</p>
          </div>
          <div className="Temp">
            {data?.main ? <h1>{data.main.temp}°</h1> : null}
          </div>
          <div className="Descrizione">
            {data?.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="Section">
          <div className="Percepiti">
            {data?.main ? <p>{data.main.feels_like}°</p> : null}
            <p>Percepiti</p>
          </div>
          <div className="Umidità">
            {data?.main ? <p>{data.main.humidity}%</p> : null}
            <p>Umidità</p>
          </div>
          <div className="Vento">
            {data?.wind ? <p>{data.wind.speed}km/h</p> : null}
            <p>Vento</p>
          </div>
        </div>
        <div className="Forecast">
          {" "}
          {forecastData?.map((forecast, index) => (
            <div key={index} className="ForecastItem">
              {" "}
              <p>Data: {forecast.dt_txt}</p>{" "}
              <p>Temperatura: {forecast.main.temp}°</p>
              <p>Descrizione: {forecast.weather[0].main}</p>
            </div>
          ))}
        </div>
        <button onClick={() => window.history.back()}>Cerca di nuovo</button>
      </div>
    </div>
  );
}
