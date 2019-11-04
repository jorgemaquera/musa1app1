import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd05Component } from './btn-md05.component';

describe('BtnMd05Component', () => {
  let component: BtnMd05Component;
  let fixture: ComponentFixture<BtnMd05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
