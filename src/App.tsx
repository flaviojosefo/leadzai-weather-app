import Header from './components/Header';
import Footer from './components/Footer';
import CitySelector from './components/CityDropdown';
import TemperatureToggle from './components/TemperatureToggle';
import type { City } from './types/city';
import { cities } from './utils/cities';
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [celsius, setCelsius] = useState<boolean>(true);

  return (
    <div className="app">
      <Header />
      <CitySelector
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      />
      <TemperatureToggle
        celsius={celsius}
        onToggle={() => setCelsius(!celsius)}
      />
      <Footer />
    </div>
  );
}

export default App;