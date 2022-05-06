import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export enum WeatherIconEnum {
  '02d' = 'cloudy-day-3',
  '02n' = 'cloudy-night-3',
  '03d' = 'cloudy',
  '03n' = 'cloudy',
  '04d' = 'cloudy',
  '04n' = 'cloudy',
  '01d' = 'day',
  '01n' = 'night',
  '10d' = 'rainy-3',
  '10n' = 'rainy-3',
  '09d' = 'rainy-7',
  '09n' = 'rainy-7',
  '13d' = 'snowy-6',
  '13n' = 'snowy-6',
  '11d' = 'thunder',
  '11n' = 'thunder',
}

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService {
  static OPEN_WEATHER_API_KEY = '1b249e0bd50ad0fb76c8c6a32a0836ca';

  constructor(private http: HttpClient) {}
  getCurrentWeatherCity(lat: number | undefined, lon: number | undefined) {
    if (!lat || !lon) throw new Error("No value for 'lat' or 'lon'");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=fr&appid=${OpenWeatherApiService.OPEN_WEATHER_API_KEY}&units=metric`;
    return this.http.get(url);
  }
  getOneWeekWeatherCity(lat: number | undefined, lon: number | undefined) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=fr&appid=${OpenWeatherApiService.OPEN_WEATHER_API_KEY}&units=metric`;
    return this.http.get(url).pipe(tap((response) => response));
  }

  convertApiIconToAppIcon(apiIcon: string) {
    return WeatherIconEnum[apiIcon as keyof typeof WeatherIconEnum];
  }
}
