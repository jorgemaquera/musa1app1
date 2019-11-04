import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md05AlmacenComponent } from './md05-almacen.component';

describe('Md05AlmacenComponent', () => {
  let component: Md05AlmacenComponent;
  let fixture: ComponentFixture<Md05AlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md05AlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md05AlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
