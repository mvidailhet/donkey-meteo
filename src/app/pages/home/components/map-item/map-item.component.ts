import { Component, Input } from '@angular/core';
import { Cities } from '../../home.page';

@Component({
  selector: 'g[map-item]', // eslint-disable-line @angular-eslint/component-selector
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.scss'],
})
export class MapItemComponent {
  @Input() city!: Cities;
}
