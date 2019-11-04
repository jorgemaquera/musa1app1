import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md04VentasComponent } from './md04-ventas.component';

describe('Md04VentasComponent', () => {
  let component: Md04VentasComponent;
  let fixture: ComponentFixture<Md04VentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md04VentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md04VentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
