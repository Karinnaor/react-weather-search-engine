import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherApp from "./WeatherApp";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="appBox">
      <div className="weatherArea">
        <h1>Weather Search Engine</h1>
        <WeatherApp />
      </div>
      <p className="text-center mt-5">
        ✌️ This project was coded by Karin Naor, and is{" "}
        <a
          href="https://github.com/Karinnaor/react-weather-search-engine"
          target="_blank"
          rel="noreferrer"
          title="Karin's code on github"
        >
          open sourced
        </a>
      </p>
    </div>
  </StrictMode>
);
