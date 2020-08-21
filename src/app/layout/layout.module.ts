import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';



@NgModule({
  declarations: [DefaultComponent, FullscreenComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [DefaultComponent,FullscreenComponent]
})
export class LayoutModule { }
