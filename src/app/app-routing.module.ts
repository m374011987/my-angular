import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //note: 这里的exports有什么用,为了app.module.ts中支持importAppRoutingModule吗?
  exports: [RouterModule]
})
export class AppRoutingModule { }
