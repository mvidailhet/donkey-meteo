import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Place, PlacesService } from '../../services/google/places.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  city: Place | undefined;

  constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(this.handleParams);
  }
  handleParams = (params: Params) => {
    this.city = this.placesService.getCityFromRouteParams(params);
  };
}
