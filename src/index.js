import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherApp from "./WeatherApp";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="weatherArea">
      <h1>Weather Search Engine</h1>
      <WeatherApp />
    </div>
  </StrictMode>
);
