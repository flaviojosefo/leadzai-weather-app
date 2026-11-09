import type { WeatherData } from "../types/weather";
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
  const iconAlt = weatherData.weather[0].description;
  const iconUrl = `https://openweathermap.org/payload/api/media/file/${iconCode}@2x.png`;

  return (
    <div className="weather-display">
      <div className="weather-info">
        <p>{formattedTemp}</p>
        <img src={iconUrl} alt={iconAlt} />
      </div>
      <div className="weather-sun">
        <p>Sunrise: {formattedSunrise}</p>
        <p>Sunset: {formattedSunset}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;