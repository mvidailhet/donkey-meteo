import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import * as frenchTranslation from '../../../assets/i18n/fr.json';
import { CityPage } from './city.page';

describe('CityPage', () => {
  let component: CityPage;
  let fixture: ComponentFixture<CityPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CityPage],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateTestingModule.withTranslations(frenchTranslation),
        IonicModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
