import { Component, OnInit } from '@angular/core';
import { Place, PlacesService } from 'src/app/services/google/places.service';
import { OpenWeatherApiService, WeatherIconEnum } from 'src/app/services/open-weather-api/open-weather-api.service';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.page.html',
  styleUrls: ['./one-day.page.scss'],
})
export class OneDayPage implements OnInit {
  city: Place | undefined;
  oneWeekForecast: any;
  WeatherIconEnum!: WeatherIconEnum;
  indexCurrentDay = 0;

  constructor(private placesService: PlacesService, private openWeatherApiService: OpenWeatherApiService) {}

  ngOnInit() {
    this.city = this.placesService.currentCity;
    this.getOneWeekWeatherCity(this.city?.location.lat, this.city?.location.lng);
  }

  getOneWeekWeatherCity(lat: number | undefined, lon: number | undefined) {
    this.openWeatherApiService.getOneWeekWeatherCity(lat, lon).subscribe((response) => {
      this.oneWeekForecast = response;
      this.oneWeekForecast.daily.forEach((day: any) => {
        // eslint-disable-next-line no-param-reassign
        day.weather[0].icon = this.openWeatherApiService.convertApiIconToAppIcon(day.weather[0].icon);
        // eslint-disable-next-line no-param-reassign
        day.wind_speed = this.openWeatherApiService.convertMeterPerSecondToKilometrePerHour(day.wind_speed);
        // eslint-disable-next-line no-param-reassign
        day.wind_gust = this.openWeatherApiService.convertMeterPerSecondToKilometrePerHour(day.wind_gust);
      });
      this.oneWeekForecast.hourly.forEach((hour: any) => {
        const ts = new Date(hour.dt * 1000);
        console.log(ts.toDateString());
      });
      console.log('this.oneWeekForecast :', this.oneWeekForecast);
    });
  }
}
