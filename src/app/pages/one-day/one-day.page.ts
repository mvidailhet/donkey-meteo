import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Place, PlacesService } from '../../services/google/places.service';
import { OpenWeatherApiService, WeatherIconEnum } from '../../services/open-weather-api/open-weather-api.service';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.page.html',
  styleUrls: ['./one-day.page.scss'],
})
export class OneDayPage implements OnInit, OnDestroy {
  city: Place | undefined;
  oneWeekForecast: any;
  WeatherIconEnum!: WeatherIconEnum;
  fragmentSubscription: Subscription | undefined;
  indexOfDay = 0;

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
  ) {}

  ngOnInit() {
    this.fragmentSubscription = this.activatedRoute.fragment.subscribe(this.handleFragment);
    this.activatedRoute.params.subscribe(this.handleParams);
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
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
      });
      console.log('this.oneWeekForecast :', this.oneWeekForecast);
    });
  }

  handleFragment = (fragment: string | null) => {
    console.log(`fragment : ${fragment}`);
    if (fragment === null) return;
    this.indexOfDay = Number(fragment);
    console.log('this.indexOfDay :', this.indexOfDay);
  };

  handleParams = (params: Params) => {
    this.city = this.placesService.getCityFromRouteParams(params);
    this.getOneWeekWeatherCity(this.city.location.lat, this.city.location.lng);
  };
}
