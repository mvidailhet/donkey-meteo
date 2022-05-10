import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { OneDayPage } from './one-day.page';

describe('OneDayPage', () => {
  let component: OneDayPage;
  let fixture: ComponentFixture<OneDayPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OneDayPage],
      imports: [HttpClientModule, RouterTestingModule, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OneDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
