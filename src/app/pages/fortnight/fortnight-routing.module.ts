import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortnightPage } from './fortnight.page';

const routes: Routes = [
  {
    path: '',
    component: FortnightPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortnightPageRoutingModule {}
