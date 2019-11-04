import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Md01CondybusesComponent } from './md01-condybuses.component';

describe('Md01CondybusesComponent', () => {
  let component: Md01CondybusesComponent;
  let fixture: ComponentFixture<Md01CondybusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Md01CondybusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Md01CondybusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
