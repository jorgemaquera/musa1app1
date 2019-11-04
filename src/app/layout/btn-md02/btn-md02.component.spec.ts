import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd02Component } from './btn-md02.component';

describe('BtnMd02Component', () => {
  let component: BtnMd02Component;
  let fixture: ComponentFixture<BtnMd02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
