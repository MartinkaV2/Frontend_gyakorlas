import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kezdolap } from './kezdolap';

describe('Kezdolap', () => {
  let component: Kezdolap;
  let fixture: ComponentFixture<Kezdolap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kezdolap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kezdolap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
