import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cities } from '../../home.page';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() cities: Cities[] = [];
  @Output() goToCity = new EventEmitter<Cities>();

  onCityClick(city: Cities) {
    this.goToCity.emit(city);
  }
}
