import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import { CityPageRoutingModule } from './city-routing.module';

import { CityPage } from './city.page';
import { OneDayPage } from '../one-day/one-day.page';
import { OneWeekPage } from '../one-week/one-week.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CityPageRoutingModule, SwiperModule, TranslateModule.forChild()],
  declarations: [CityPage, OneDayPage, OneWeekPage],
})
export class CityPageModule {}
