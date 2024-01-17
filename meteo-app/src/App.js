import React, { useState } from "react";
import axios from "axios";
import app from "./App.css";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=97aa15d3d3f910a822bb40a0c17951d0`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          setLocation("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="Ricerca">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        <div className="Main">
          <div className="Locazione">
            <p>{data.name}</p>
          </div>
          <div className="Temp">
            {data.main ? <h1>{data.main.temp}°</h1> : null}
          </div>
          <div className="Descrizione">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="Section">
            <div className="Percepiti">
              {data.main ? <p>{data.main.feels_like}°</p> : null}
              <p>Percepiti</p>
            </div>
            <div className="Umidità">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Umidità</p>
            </div>
            <div className="Vento">
              {data.wind ? <p>{data.wind.speed}km/h</p> : null}
              <p>Vento</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
