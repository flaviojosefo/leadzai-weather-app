export function formatTemperature (kelvin: number, celsius: boolean): number {
  const temp = celsius ? kelvin - 273.15 : (kelvin - 273.15) * 9/5 + 32;
  return Math.round(temp);
};