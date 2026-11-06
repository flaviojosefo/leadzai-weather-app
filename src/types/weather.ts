export interface WeatherCondition {
  description: string;
  icon: string;
}

export interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: WeatherCondition[];
    sys: {
        sunrise: number;
        sunset: number;
    }
    timezone: number;
}