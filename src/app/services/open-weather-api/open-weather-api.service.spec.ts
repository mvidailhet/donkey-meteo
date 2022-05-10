import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OpenWeatherApiService } from './open-weather-api.service';

describe('OpenWeatherApiService', () => {
  let service: OpenWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OpenWeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
