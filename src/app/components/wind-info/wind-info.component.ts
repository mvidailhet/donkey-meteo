import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-info',
  templateUrl: './wind-info.component.html',
  styleUrls: ['./wind-info.component.scss'],
})
export class WindInfoComponent {
  @Input() degRotation: number | undefined;
}
