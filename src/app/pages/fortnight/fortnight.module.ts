import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FortnightPageRoutingModule } from './fortnight-routing.module';

import { FortnightPage } from './fortnight.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FortnightPageRoutingModule],
  declarations: [FortnightPage],
})
export class FortnightPageModule {}
