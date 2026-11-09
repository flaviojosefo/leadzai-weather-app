import type { WeatherData } from "../types/weather";
import type { City } from "../types/city";
import { formatCityAPI } from "../utils/formatCity";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeatherData = async (city: City): Promise<WeatherData> => {
  const formattedCity = formatCityAPI(city);
  const response = await fetch(`${apiUrl}?q=${formattedCity}&APPID=${apiKey}`);
  
  if (!response.ok)
    throw new Error("Failed to fetch weather data");
  
  return response.json();
};