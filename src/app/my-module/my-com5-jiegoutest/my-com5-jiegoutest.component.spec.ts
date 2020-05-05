import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCom5JiegoutestComponent } from './my-com5-jiegoutest.component';

describe('MyCom5JiegoutestComponent', () => {
  let component: MyCom5JiegoutestComponent;
  let fixture: ComponentFixture<MyCom5JiegoutestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCom5JiegoutestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCom5JiegoutestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
