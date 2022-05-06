import { Component, OnInit } from '@angular/core';
import { Place, PlacesService } from 'src/app/services/google/places.service';
import { OpenWeatherApiService, WeatherIconEnum } from 'src/app/services/open-weather-api/open-weather-api.service';

@Component({
  selector: 'app-one-week',
  templateUrl: './one-week.page.html',
  styleUrls: ['./one-week.page.scss'],
})
export class OneWeekPage implements OnInit {
  city: Place | undefined;
  oneWeekForecast: any;
  WeatherIconEnum!: WeatherIconEnum;

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
      });
      console.log('this.oneWeekForecast :', this.oneWeekForecast.daily[0]);
    });
  }
}
