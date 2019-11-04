import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md03DespachoComponent } from './md03-despacho.component';

describe('Md03DespachoComponent', () => {
  let component: Md03DespachoComponent;
  let fixture: ComponentFixture<Md03DespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md03DespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md03DespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
