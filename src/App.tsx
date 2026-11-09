import Header from './components/Header';
import Footer from './components/Footer';
import CitySelector from './components/CityDropdown';
import TemperatureToggle from './components/TemperatureToggle';
import WeatherDisplay from './components/WeatherDisplay';
import type { City } from './types/city';
import { useWeather } from './hooks/useWeather';
import { cities } from './utils/cities';
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [celsius, setCelsius] = useState<boolean>(true);

  const { weatherData, loading, error } = useWeather(selectedCity);

  return (
    <div className="app">
      <Header />
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className="main">
          <CitySelector
            selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
          />
          <TemperatureToggle
            celsius={celsius}
            onToggle={() => setCelsius(!celsius)}
          />
          <WeatherDisplay
            weatherData={weatherData}
            celsius={celsius}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;