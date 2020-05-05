import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCom2Component } from './my-com2.component';

describe('MyCom2Component', () => {
  let component: MyCom2Component;
  let fixture: ComponentFixture<MyCom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
