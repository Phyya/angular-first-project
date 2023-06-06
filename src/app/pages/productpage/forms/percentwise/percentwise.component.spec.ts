import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentwiseComponent } from './percentwise.component';

describe('PercentwiseComponent', () => {
  let component: PercentwiseComponent;
  let fixture: ComponentFixture<PercentwiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentwiseComponent]
    });
    fixture = TestBed.createComponent(PercentwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
