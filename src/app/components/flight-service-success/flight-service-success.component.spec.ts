import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightServiceSuccessComponent } from './flight-service-success.component';

describe('FlightServiceSuccessComponent', () => {
  let component: FlightServiceSuccessComponent;
  let fixture: ComponentFixture<FlightServiceSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightServiceSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightServiceSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
