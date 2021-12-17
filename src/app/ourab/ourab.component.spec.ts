import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurabComponent } from './ourab.component';

describe('OurabComponent', () => {
  let component: OurabComponent;
  let fixture: ComponentFixture<OurabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
