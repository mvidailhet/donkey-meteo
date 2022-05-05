import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { CityPageRoutingModule } from './city-routing.module';

import { CityPage } from './city.page';
import { FortnightPageModule } from '../fortnight/fortnight.module';
import { OneDayPageModule } from '../one-day/one-day.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityPageRoutingModule,
    FortnightPageModule,
    OneDayPageModule,
    TranslateModule.forChild(),
  ],
  declarations: [CityPage],
})
export class CityPageModule {}
