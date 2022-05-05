import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneDayPage } from './one-day.page';

const routes: Routes = [
  {
    path: '',
    component: OneDayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneDayPageRoutingModule {}
