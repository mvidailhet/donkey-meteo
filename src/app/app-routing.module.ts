import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'city/:name',
    loadChildren: () => import('./pages/city/city.module').then((m) => m.CityPageModule),
  },
  {
    path: 'fortnight',
    loadChildren: () => import('./pages/fortnight/fortnight.module').then((m) => m.FortnightPageModule),
  },
  {
    path: 'one-day',
    loadChildren: () => import('./pages/one-day/one-day.module').then((m) => m.OneDayPageModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
