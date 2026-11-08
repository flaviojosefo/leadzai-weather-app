import type { City } from '../types/city';
import { cities } from '../utils/cities';
import { formatCity } from '../utils/formatCity';
import { useState, useRef, useEffect } from 'react';
import './CityDropdown.css';

interface CityDropdownProps {
  selectedCity: City;
  onSelectCity: (city: City) => void;
}

function CityDropdown({ selectedCity, onSelectCity }: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleSelectCity(city: City, previousCity: City) {
    setIsOpen(false);
    if (city != previousCity)
      onSelectCity(city);
  }
  
  return (
    <div className="city-dropdown" ref={dropdownRef}>
      <button
        type='button'
        className="city-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {formatCity(selectedCity)}
        </span>
        <span className={`city-dropdown-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="city-dropdown-menu">
          {cities.map((city) => (
            <button
              type='button'
              className="city-dropdown-item"
              key={`${city.name}-${city.countryCode}`}
              onClick={() => handleSelectCity(city, selectedCity)}
            >
              {formatCity(city)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CityDropdown;