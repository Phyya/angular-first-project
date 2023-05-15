import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavestarComponent } from './savestar.component';

describe('SavestarComponent', () => {
  let component: SavestarComponent;
  let fixture: ComponentFixture<SavestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavestarComponent]
    });
    fixture = TestBed.createComponent(SavestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
