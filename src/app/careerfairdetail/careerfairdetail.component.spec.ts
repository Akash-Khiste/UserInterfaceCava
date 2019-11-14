import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerfairdetailComponent } from './careerfairdetail.component';

describe('CareerfairdetailComponent', () => {
  let component: CareerfairdetailComponent;
  let fixture: ComponentFixture<CareerfairdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerfairdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerfairdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
