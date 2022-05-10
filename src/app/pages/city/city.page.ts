import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/google/places.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage {
  city = this.placesService.currentCity;

  constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute) {}
}
