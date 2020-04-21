import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCom1Component } from './my-com1.component';

describe('MyCom1Component', () => {
  let component: MyCom1Component;
  let fixture: ComponentFixture<MyCom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
