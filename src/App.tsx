import Header from './components/Header';
import Footer from './components/Footer';
import CitySelector from './components/CityDropdown';
import type { City } from './types/city';
import { cities } from './utils/cities';
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  return (
    <div className="app">
      <Header />
      <CitySelector
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      />
      <Footer />
    </div>
  );
}

export default App;