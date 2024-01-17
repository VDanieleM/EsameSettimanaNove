import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Risultati from "./Risultati";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=97aa15d3d3f910a822bb40a0c17951d0`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setLocation("");
        navigate("/Risultati", { state: { data: response.data } });
      } catch (error) {
        console.log(error);
      }
    } else {
      setData({});
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
      </div>
    </div>
  );
}
