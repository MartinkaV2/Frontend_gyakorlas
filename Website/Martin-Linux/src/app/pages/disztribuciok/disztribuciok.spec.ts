import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disztribuciok } from './disztribuciok';

describe('Disztribuciok', () => {
  let component: Disztribuciok;
  let fixture: ComponentFixture<Disztribuciok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disztribuciok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disztribuciok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
