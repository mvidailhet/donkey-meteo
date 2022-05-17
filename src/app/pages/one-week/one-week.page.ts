import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import SwiperCore, { Keyboard, Navigation, Pagination, SwiperOptions } from 'swiper';
import { Place } from '../../services/google/places.service';
import { OpenWeatherApiService } from '../../services/open-weather-api/open-weather-api.service';

SwiperCore.use([Pagination, Keyboard, Navigation]);
@Component({
  selector: 'app-one-week',
  templateUrl: './one-week.page.html',
  styleUrls: ['./one-week.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OneWeekPage implements OnInit {
  city: Place | undefined;
  oneWeekForecast: any;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: true,
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  };

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
    });
  }

  goToOneDayPage(index: number) {
    console.log('index :', index);
    this.router.navigate(
      [`city/${this.city!.name.toLowerCase()}/lat/${this.city!.location.lat}/lng/${this.city!.location.lng}/one-day`],
      {
        fragment: index.toString(),
        queryParamsHandling: 'preserve',
      },
    );
  }

  handleParams = (params: Params) => {
    this.city = {
      name: params['name'],
      location: {
        lat: params['lat'],
        lng: params['lng'],
      },
    };
    this.getOneWeekWeatherCity(this.city.location.lat, this.city.location.lng);
  };
}
