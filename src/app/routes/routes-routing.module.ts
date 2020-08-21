import { FullscreenComponent } from './../layout/fullscreen/fullscreen.component'
import { DefaultComponent } from './../layout/default/default.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: 'dashboard',
				// loadChildren: () =>
				// 	import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
				component: DashboardComponent,
			},
		],
	},
	{
		path: 'fullscreen',
		component: FullscreenComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
			},
		],
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			enableTracing: true,
		}),
	],
	exports: [RouterModule],
})
export class RoutesRoutingModule {}
