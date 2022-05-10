import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place, PlacesService } from 'src/app/services/google/places.service';
import { OpenWeatherApiService, WeatherIconEnum } from 'src/app/services/open-weather-api/open-weather-api.service';

export interface Cities {
  city: string;
  positionX: number;
  positionY: number;
  location: {
    lat: number;
    lng: number;
  };
  dataWeather: any;
  icon: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cities: Cities[] = [
    {
      city: 'Paris',
      positionX: 319,
      positionY: 153,
      location: {
        lat: 48.8559805869938,
        lng: 2.352784454754923,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Lille',
      positionX: 316,
      positionY: 11,
      location: {
        lat: 50.629442022989444,
        lng: 3.056853777015907,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Brest',
      positionX: 23,
      positionY: 170,
      location: {
        lat: 48.390600664600306,
        lng: -4.486765233012889,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'La Rochelle',
      positionX: 172,
      positionY: 312,
      location: {
        lat: 46.15978682810672,
        lng: -1.1484933083454727,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Tours',
      positionX: 240,
      positionY: 247,
      location: {
        lat: 47.39403125561115,
        lng: 0.6848141252403174,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Auxerre',
      positionX: 370,
      positionY: 228,
      location: {
        lat: 47.79834611958766,
        lng: 3.573770269513885,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Strasbourg',
      positionX: 540,
      positionY: 144,
      location: {
        lat: 48.573428580942945,
        lng: 7.752358131422412,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Lyon',
      positionX: 410,
      positionY: 330,
      location: {
        lat: 48.573428580942945,
        lng: 7.752358131422412,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Perpignan',
      positionX: 337,
      positionY: 510,
      location: {
        lat: 45.763773662356705,
        lng: 4.836045366661083,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Marseille',
      positionX: 457,
      positionY: 473,
      location: {
        lat: 43.28421224351328,
        lng: 5.372108800218216,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Ajaccio',
      positionX: 586,
      positionY: 562,
      location: {
        lat: 41.91980856592837,
        lng: 8.735916908189552,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Biarritz',
      positionX: 156,
      positionY: 470,
      location: {
        lat: 43.48353964710237,
        lng: -1.5587946314659744,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Rouen',
      positionX: 240,
      positionY: 100,
      location: {
        lat: 49.44294014429256,
        lng: 1.0996681856028367,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Besançon',
      positionX: 490,
      positionY: 256,
      location: {
        lat: 47.23787134060198,
        lng: 6.025152903564011,
      },
      dataWeather: {},
      icon: undefined,
    },
    {
      city: 'Toulouse',
      positionX: 278,
      positionY: 450,
      location: {
        lat: 43.6022455867758,
        lng: 1.4432793565019082,
      },
      dataWeather: {},
      icon: undefined,
    },
  ];
  WeatherIconEnum!: WeatherIconEnum;

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private placesService: PlacesService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getCityMapData();
    // console.log('Object.values(WeatherIconEnum).indexOf(cityIcon) :', Object.values(WeatherIconEnum));
  }

  getPosition(event: MouseEvent) {
    console.log('event.offsetX :', event.offsetX);
    console.log('event.offsetY :', event.offsetY);
    console.log('****');
  }

  getCityMapData() {
    this.cities.forEach((city) => {
      this.openWeatherApiService
        .getCurrentWeatherCity(city.location.lat, city.location.lng)
        .subscribe((result: any) => {
          // eslint-disable-next-line no-param-reassign
          city.dataWeather = result;
          // eslint-disable-next-line no-param-reassign
          city.icon = `assets/amcharts_weather_icons_1.0.0/animated/${this.openWeatherApiService.convertApiIconToAppIcon(
            result.weather[0].icon,
          )}.svg`;
        });
    });
  }

  goToCity(place: string) {
    this.router.navigate([`city/${place.toLowerCase()}`]);
  }
}
