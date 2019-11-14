import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginattendeeComponent } from './loginattendee.component';

describe('LoginattendeeComponent', () => {
  let component: LoginattendeeComponent;
  let fixture: ComponentFixture<LoginattendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginattendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginattendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
