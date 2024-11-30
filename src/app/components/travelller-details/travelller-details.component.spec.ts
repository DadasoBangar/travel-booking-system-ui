import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelllerDetailsComponent } from './travelller-details.component';

describe('TravelllerDetailsComponent', () => {
  let component: TravelllerDetailsComponent;
  let fixture: ComponentFixture<TravelllerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelllerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelllerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
