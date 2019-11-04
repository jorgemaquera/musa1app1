import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd04Component } from './btn-md04.component';

describe('BtnMd04Component', () => {
  let component: BtnMd04Component;
  let fixture: ComponentFixture<BtnMd04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
