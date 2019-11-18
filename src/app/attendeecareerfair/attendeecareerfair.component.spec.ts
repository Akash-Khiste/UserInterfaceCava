import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeecareerfairComponent } from './attendeecareerfair.component';

describe('AttendeecareerfairComponent', () => {
  let component: AttendeecareerfairComponent;
  let fixture: ComponentFixture<AttendeecareerfairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeecareerfairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeecareerfairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
