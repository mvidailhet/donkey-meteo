import { Component, OnInit } from '@angular/core';
import { Place, PlacesService } from 'src/app/services/google/places.service';
import { OpenWeatherApiService, WeatherIconEnum } from 'src/app/services/open-weather-api/open-weather-api.service';

@Component({
  selector: 'app-fortnight',
  templateUrl: './fortnight.page.html',
  styleUrls: ['./fortnight.page.scss'],
})
export class FortnightPage implements OnInit {
  city: Place | undefined;
  fortnightForecast: any;
  WeatherIconEnum!: WeatherIconEnum;

  constructor(private placesService: PlacesService, private openWeatherApiService: OpenWeatherApiService) {}

  ngOnInit() {
    this.city = this.placesService.currentCity;
    this.getFortnightWeatherCity(this.city?.location.lat, this.city?.location.lng);
  }

  getFortnightWeatherCity(lat: number | undefined, lon: number | undefined) {
    this.openWeatherApiService.getFortnightWeatherCity(lat, lon).subscribe((response) => {
      this.fortnightForecast = response;
      this.fortnightForecast.daily.forEach((day: any) => {
        // eslint-disable-next-line no-param-reassign
        day.weather[0].icon = this.openWeatherApiService.convertApiIconToAppIcon(day.weather[0].icon);
      });
      console.log('this.fortnightForecast :', this.fortnightForecast.daily[0]);
    });
  }
}
