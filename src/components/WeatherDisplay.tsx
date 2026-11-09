import type { WeatherData } from "../types/weather";
import { formatDescription } from "../utils/formatDescription";
import { formatTemperature } from "../utils/formatTemperature";
import {formatTime} from "../utils/formatTime";
import './WeatherDisplay.css';

interface WeatherDisplayProps {
  weatherData: WeatherData;
  celsius: boolean;
}

function WeatherDisplay({ weatherData, celsius }: WeatherDisplayProps) {
  const formattedTemp = formatTemperature(weatherData.main.temp, celsius);

  const formattedSunrise = formatTime(weatherData.sys.sunrise, weatherData.timezone);
  const formattedSunset = formatTime(weatherData.sys.sunset, weatherData.timezone);

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  
  const description = formatDescription(weatherData.weather[0].description);

  return (
    <div className="weather-display">
      <div className="weather-info">
        <img src={iconUrl} alt="icon" />
        <p className="weather-temperature">
          {formattedTemp} 
          <sup>º{celsius ? 'C' : 'F'}</sup>
        </p>
        <p className="weather-description">
          {description}
        </p>
      </div>
      <div className="weather-sun">
        <div className="weather-sun-item">
          <span>Sunrise</span>
          <p>{formattedSunrise}</p>
        </div>
        <div className="weather-sun-item">
          <span>Sunset</span>
          <p>{formattedSunset}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;