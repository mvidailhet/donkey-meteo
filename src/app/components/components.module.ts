import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { ListLoaderComponent } from './list-loader/list-loader.component';

@NgModule({
  declarations: [ListLoaderComponent],
  exports: [ListLoaderComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
