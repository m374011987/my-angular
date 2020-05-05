import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCom1Component } from './my-com1/my-com1.component';
import { MyCom2Component } from './my-com2/my-com2.component';

@NgModule({
  declarations: [MyCom1Component, MyCom2Component],
  imports: [
    CommonModule
  ],
  exports: [MyCom1Component, MyCom2Component]
})
export class MyModuleModule { }
