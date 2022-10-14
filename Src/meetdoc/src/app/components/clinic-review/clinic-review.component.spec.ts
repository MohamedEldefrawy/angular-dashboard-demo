import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicReviewComponent } from './clinic-review.component';

describe('ClinicReviewComponent', () => {
  let component: ClinicReviewComponent;
  let fixture: ComponentFixture<ClinicReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
