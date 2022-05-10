import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneDayPage } from '../one-day/one-day.page';
import { OneWeekPage } from '../one-week/one-week.page';

import { CityPage } from './city.page';

const routes: Routes = [
  {
    path: '',
    component: CityPage,
    children: [
      {
        path: 'one-week',
        component: OneWeekPage,
      },
      {
        path: 'one-day',
        component: OneDayPage,
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
