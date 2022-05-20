import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MapItemComponent } from './components/map-item/map-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, TranslateModule.forChild()],
  declarations: [HomePage, MapItemComponent],
})
export class HomePageModule {}
