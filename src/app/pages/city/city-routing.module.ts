import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityPage } from './city.page';

const routes: Routes = [
  {
    path: '',
    component: CityPage,
    children: [
      {
        path: 'one-week',
        children: [
          {
            path: '',
            loadChildren: () => import('../one-week/one-week.module').then((m) => m.OneWeekPageModule),
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
        redirectTo: 'one-week',
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
