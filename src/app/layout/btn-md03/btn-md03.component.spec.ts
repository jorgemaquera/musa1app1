import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd03Component } from './btn-md03.component';

describe('BtnMd03Component', () => {
  let component: BtnMd03Component;
  let fixture: ComponentFixture<BtnMd03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
