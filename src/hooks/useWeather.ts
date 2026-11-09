import type { City } from "../types/city";
import type { WeatherData } from "../types/weather";
import { getWeatherData } from "../services/weatherService";
import { useState, useEffect } from "react";

export function useWeather(selectedCity: City) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData(selectedCity);
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  return {weatherData, loading, error};
}