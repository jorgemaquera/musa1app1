import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarMd01Component } from './siderbar-md01.component';

describe('SiderbarMd01Component', () => {
  let component: SiderbarMd01Component;
  let fixture: ComponentFixture<SiderbarMd01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderbarMd01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbarMd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
