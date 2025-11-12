import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapcsolat } from './kapcsolat';

describe('Kapcsolat', () => {
  let component: Kapcsolat;
  let fixture: ComponentFixture<Kapcsolat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kapcsolat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kapcsolat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
