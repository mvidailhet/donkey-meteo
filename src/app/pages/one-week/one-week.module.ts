import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneWeekPageRoutingModule } from './one-week-routing.module';

import { OneWeekPage } from './one-week.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OneWeekPageRoutingModule],
  declarations: [OneWeekPage],
})
export class OneWeekPageModule {}
