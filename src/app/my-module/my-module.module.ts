import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCom1Component } from './my-com1/my-com1.component';
import { MyCom2Component } from './my-com2/my-com2.component';
import { MyCom3Component } from './my-com3/my-com3.component';
import { MyCom4JiegouComponent } from './my-com4-jiegou/my-com4-jiegou.component';

@NgModule({
  declarations: [MyCom1Component, MyCom2Component, MyCom3Component, MyCom4JiegouComponent],
  imports: [
    CommonModule
  ],
  exports: [MyCom1Component, MyCom2Component, MyCom3Component, MyCom4JiegouComponent]
})
export class MyModuleModule { }
