import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchPriceDetailsComponent } from './flight-search-price-details.component';

describe('FlightSearchPriceDetailsComponent', () => {
  let component: FlightSearchPriceDetailsComponent;
  let fixture: ComponentFixture<FlightSearchPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightSearchPriceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
