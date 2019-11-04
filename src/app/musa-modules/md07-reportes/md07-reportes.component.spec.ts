import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md07ReportesComponent } from './md07-reportes.component';

describe('Md07ReportesComponent', () => {
  let component: Md07ReportesComponent;
  let fixture: ComponentFixture<Md07ReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md07ReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md07ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
