import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { CityPageRoutingModule } from './city-routing.module';

import { CityPage } from './city.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CityPageRoutingModule, TranslateModule.forChild()],
  declarations: [CityPage],
})
export class CityPageModule {}
