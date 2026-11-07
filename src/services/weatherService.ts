import type { WeatherData } from "../types/weather";
import type { City } from "../types/city";

import { formatCity } from "../utils/formatCity";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const getWeatherData = async (city: City): Promise<WeatherData> => {
  const formattedCity = formatCity(city);
  const response = await fetch(`${API_URL}?q=${formattedCity}&APPID=${API_KEY}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};