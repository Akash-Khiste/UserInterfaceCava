import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredattendeesComponent } from './registeredattendees.component';

describe('RegisteredattendeesComponent', () => {
  let component: RegisteredattendeesComponent;
  let fixture: ComponentFixture<RegisteredattendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredattendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredattendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
