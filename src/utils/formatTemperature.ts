export function formatTemperature (temp: number, celsius: boolean): string {
    if (celsius)
        return `${Math.round(temp - 273.15)} °C`;
    else
        return `${(Math.round(temp * 9/5 + 32))} °F`;
};