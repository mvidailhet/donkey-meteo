import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { OneWeekPage } from './one-week.page';

describe('OneWeekPage', () => {
  let component: OneWeekPage;
  let fixture: ComponentFixture<OneWeekPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OneWeekPage],
      imports: [HttpClientModule, RouterTestingModule, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OneWeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
