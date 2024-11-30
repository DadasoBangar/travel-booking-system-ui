import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsServiceComponent } from './flight-details-service.component';

describe('FlightDetailsServiceComponent', () => {
  let component: FlightDetailsServiceComponent;
  let fixture: ComponentFixture<FlightDetailsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightDetailsServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightDetailsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
