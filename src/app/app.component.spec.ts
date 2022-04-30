import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { AppComponent } from './app.component';
import * as frenchTranslation from '../assets/i18n/fr.json';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateTestingModule.withTranslations('fr', frenchTranslation)],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
