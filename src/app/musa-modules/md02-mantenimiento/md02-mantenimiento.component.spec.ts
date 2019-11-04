import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md02MantenimientoComponent } from './md02-mantenimiento.component';

describe('Md02MantenimientoComponent', () => {
  let component: Md02MantenimientoComponent;
  let fixture: ComponentFixture<Md02MantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md02MantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md02MantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
