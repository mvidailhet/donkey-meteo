import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityPage } from './city.page';

const routes: Routes = [
  {
    path: '',
    component: CityPage,
    children: [
      {
        path: 'fortnight',
        children: [
          {
            path: '',
            loadChildren: () => import('../fortnight/fortnight.module').then((m) => m.FortnightPageModule),
          },
        ],
      },
      {
        path: 'one-day',
        children: [
          {
            path: '',
            loadChildren: () => import('../one-day/one-day.module').then((m) => m.OneDayPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'fortnight',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityPageRoutingModule {}
