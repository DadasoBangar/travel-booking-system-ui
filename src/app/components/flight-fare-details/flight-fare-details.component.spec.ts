import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFareDetailsComponent } from './flight-fare-details.component';

describe('FlightFareDetailsComponent', () => {
  let component: FlightFareDetailsComponent;
  let fixture: ComponentFixture<FlightFareDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightFareDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightFareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
