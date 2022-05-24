import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToggleDarkThemeComponent } from './toggle-dark-theme.component';

describe('ToggleDarkThemeComponent', () => {
  let component: ToggleDarkThemeComponent;
  let fixture: ComponentFixture<ToggleDarkThemeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleDarkThemeComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
