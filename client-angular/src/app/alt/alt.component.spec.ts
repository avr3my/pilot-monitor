import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltComponent } from './alt.component';

describe('AltComponent', () => {
  let component: AltComponent;
  let fixture: ComponentFixture<AltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltComponent]
    });
    fixture = TestBed.createComponent(AltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
