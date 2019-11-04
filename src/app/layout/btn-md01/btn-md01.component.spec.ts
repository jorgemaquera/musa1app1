import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd01Component } from './btn-md01.component';

describe('BtnMd01Component', () => {
  let component: BtnMd01Component;
  let fixture: ComponentFixture<BtnMd01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
