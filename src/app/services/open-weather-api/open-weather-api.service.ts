import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum WeatherIconEnum {
  '02d' = 'cloudy-day-3',
  '03d' = 'cloudy',
  '04d' = 'cloudy',
  '01d' = 'day',
  '10d' = 'rainy-3',
  '09d' = 'rainy-7',
  '13d' = 'snowy-6',
  '11d' = 'thunder',
}

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService {
  static OPEN_WEATHER_API_KEY = '1b249e0bd50ad0fb76c8c6a32a0836ca';

  constructor(private http: HttpClient) {}
  getWeatherCity(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=fr&appid=${OpenWeatherApiService.OPEN_WEATHER_API_KEY}&units=metric`;
    return this.http.get(url);
  }
}
