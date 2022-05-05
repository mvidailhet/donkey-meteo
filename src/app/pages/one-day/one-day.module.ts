import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneDayPageRoutingModule } from './one-day-routing.module';

import { OneDayPage } from './one-day.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OneDayPageRoutingModule],
  declarations: [OneDayPage],
})
export class OneDayPageModule {}
