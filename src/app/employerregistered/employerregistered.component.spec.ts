import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerregisteredComponent } from './employerregistered.component';

describe('EmployerregisteredComponent', () => {
  let component: EmployerregisteredComponent;
  let fixture: ComponentFixture<EmployerregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
