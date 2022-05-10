import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Place, PlacesService } from '../../services/google/places.service';
import { OpenWeatherApiService, WeatherIconEnum } from '../../services/open-weather-api/open-weather-api.service';

@Component({
  selector: 'app-one-week',
  templateUrl: './one-week.page.html',
  styleUrls: ['./one-week.page.scss'],
})
export class OneWeekPage implements OnInit {
  city: Place | undefined;
  oneWeekForecast: any;
  WeatherIconEnum!: WeatherIconEnum;

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(this.handleParams);
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

  goToOneDayPage(index: number) {
    console.log('index :', index);
    if (!this.city) throw new Error('City is not defined');

    this.router.navigate(
      ['city', this.city.name.toLowerCase(), 'lat', this.city.location.lat, 'lng', this.city.location.lng, 'one-day'],
      {
        fragment: index.toString(),
        queryParamsHandling: 'preserve',
      },
    );
    console.log('ici');
  }

  handleParams = (params: Params) => {
    this.city = this.placesService.getCityFromRouteParams(params);
    this.getOneWeekWeatherCity(this.city.location.lat, this.city.location.lng);
  };
}
