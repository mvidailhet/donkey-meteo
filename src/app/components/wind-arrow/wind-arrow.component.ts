import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-arrow',
  templateUrl: './wind-arrow.component.html',
  styleUrls: ['./wind-arrow.component.scss'],
})
export class WindArrowComponent {
  @Input() degRotation: number | undefined;
}
