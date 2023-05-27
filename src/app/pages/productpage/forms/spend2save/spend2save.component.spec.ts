import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spend2saveComponent } from './spend2save.component';

describe('Spend2saveComponent', () => {
  let component: Spend2saveComponent;
  let fixture: ComponentFixture<Spend2saveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spend2saveComponent]
    });
    fixture = TestBed.createComponent(Spend2saveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
