import type { City } from '../types/city';

export function formatCity (city: City): string {
  return `${city.name} (${city.countryCode.toUpperCase()})`;
}

export function formatCityAPI (city: City) : string {
  return `${city.name},${city.countryCode}`
}