import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCom1Component } from './my-com1/my-com1.component';

@NgModule({
  declarations: [MyCom1Component],
  imports: [
    CommonModule
  ],
  exports: [MyCom1Component]
})
export class MyModuleModule { }
