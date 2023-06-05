import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixSaveComponent } from './fix-save.component';

describe('FixSaveComponent', () => {
  let component: FixSaveComponent;
  let fixture: ComponentFixture<FixSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixSaveComponent]
    });
    fixture = TestBed.createComponent(FixSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
