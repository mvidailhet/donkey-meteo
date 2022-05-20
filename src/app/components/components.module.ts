import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { ListLoaderComponent } from './list-loader/list-loader.component';
import { WindArrowComponent } from './wind-arrow/wind-arrow.component';

@NgModule({
  declarations: [ListLoaderComponent, WindArrowComponent],
  exports: [ListLoaderComponent, WindArrowComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
