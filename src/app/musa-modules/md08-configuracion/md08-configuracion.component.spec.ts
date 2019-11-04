import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md08ConfiguracionComponent } from './md08-configuracion.component';

describe('Md08ConfiguracionComponent', () => {
  let component: Md08ConfiguracionComponent;
  let fixture: ComponentFixture<Md08ConfiguracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md08ConfiguracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md08ConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
