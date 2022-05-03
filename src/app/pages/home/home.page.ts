import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  markersCity = [
    {
      city: 'Paris',
      positionX: 319,
      positionY: 153,
    },
    {
      city: 'Lille',
      positionX: 316,
      positionY: 11,
    },
    {
      city: 'Brest',
      positionX: 23,
      positionY: 170,
    },
    {
      city: 'La Rochelle',
      positionX: 172,
      positionY: 312,
    },
    {
      city: 'Tours',
      positionX: 240,
      positionY: 247,
    },
    {
      city: 'Auxerre',
      positionX: 370,
      positionY: 228,
    },
    {
      city: 'Strasbourg',
      positionX: 540,
      positionY: 144,
    },
    {
      city: 'Lyon',
      positionX: 410,
      positionY: 330,
    },
    {
      city: 'Perpignan',
      positionX: 337,
      positionY: 510,
    },
    {
      city: 'Marseille',
      positionX: 457,
      positionY: 473,
    },
    {
      city: 'Ajacio',
      positionX: 586,
      positionY: 562,
    },
    {
      city: 'Biarritz',
      positionX: 156,
      positionY: 470,
    },
    {
      city: 'Rouen',
      positionX: 240,
      positionY: 100,
    },
    {
      city: 'Besançon',
      positionX: 490,
      positionY: 256,
    },
    {
      city: 'Toulouse',
      positionX: 278,
      positionY: 450,
    },
  ];
  getPosition(event: MouseEvent) {
    console.log('event.offsetX :', event.offsetX);
    console.log('event.offsetY :', event.offsetY);
    console.log('****');
  }
}
