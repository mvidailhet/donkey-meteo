import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneWeekPage } from './one-week.page';

const routes: Routes = [
  {
    path: '',
    component: OneWeekPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneWeekPageRoutingModule {}
