import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCom3Component } from './my-com3.component';

describe('MyCom3Component', () => {
  let component: MyCom3Component;
  let fixture: ComponentFixture<MyCom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
