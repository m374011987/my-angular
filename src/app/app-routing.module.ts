import { HerosComponent } from './heros/heros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'heroes', component: HerosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //note: 这里的exports有什么用,为了app.module.ts中支持importAppRoutingModule吗?
  exports: [RouterModule]
})
export class AppRoutingModule { }
