import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCom4JiegouComponent } from './my-com4-jiegou.component';

describe('MyCom4JiegouComponent', () => {
  let component: MyCom4JiegouComponent;
  let fixture: ComponentFixture<MyCom4JiegouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCom4JiegouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCom4JiegouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
