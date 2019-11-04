import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd07Component } from './btn-md07.component';

describe('BtnMd07Component', () => {
  let component: BtnMd07Component;
  let fixture: ComponentFixture<BtnMd07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
