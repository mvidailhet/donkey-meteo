import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/google/places.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage {
  city = this.placesService.currentCity;

  constructor(private placesService: PlacesService) {}
}
