import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListLoaderComponent } from './list-loader/list-loader.component';
import { ToggleDarkThemeComponent } from './toggle-dark-theme/toggle-dark-theme.component';
import { WindArrowComponent } from './wind-arrow/wind-arrow.component';

@NgModule({
  declarations: [ListLoaderComponent, WindArrowComponent, ToggleDarkThemeComponent],
  exports: [ListLoaderComponent, WindArrowComponent, ToggleDarkThemeComponent],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ComponentsModule {}
