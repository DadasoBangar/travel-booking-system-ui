import { TestBed } from '@angular/core/testing';

import { FlightAirportDetailsService } from './flight-airport-details.service';

describe('FlightAirportDetailsService', () => {
  let service: FlightAirportDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightAirportDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
