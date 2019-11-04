import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md06SeguridadComponent } from './md06-seguridad.component';

describe('Md06SeguridadComponent', () => {
  let component: Md06SeguridadComponent;
  let fixture: ComponentFixture<Md06SeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md06SeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md06SeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
