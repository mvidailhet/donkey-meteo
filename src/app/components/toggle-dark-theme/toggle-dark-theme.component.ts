import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-dark-theme',
  templateUrl: './toggle-dark-theme.component.html',
  styleUrls: ['./toggle-dark-theme.component.scss'],
})
export class ToggleDarkThemeComponent {
  dark = false;

  toggleTheme() {
    document.body.setAttribute('dark-theme', this.dark.toString());
  }
}
