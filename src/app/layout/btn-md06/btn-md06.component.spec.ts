import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd06Component } from './btn-md06.component';

describe('BtnMd06Component', () => {
  let component: BtnMd06Component;
  let fixture: ComponentFixture<BtnMd06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
