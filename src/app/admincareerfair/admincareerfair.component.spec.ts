import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincareerfairComponent } from './admincareerfair.component';

describe('AdmincareerfairComponent', () => {
  let component: AdmincareerfairComponent;
  let fixture: ComponentFixture<AdmincareerfairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincareerfairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincareerfairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
