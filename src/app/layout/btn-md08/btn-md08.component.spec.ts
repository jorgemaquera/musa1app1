import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMd08Component } from './btn-md08.component';

describe('BtnMd08Component', () => {
  let component: BtnMd08Component;
  let fixture: ComponentFixture<BtnMd08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnMd08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMd08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
