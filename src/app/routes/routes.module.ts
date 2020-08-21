import { LayoutModule } from './../layout/layout.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardModule } from './dashboard/dashboard.module'

@NgModule({
	declarations: [],
	imports: [CommonModule, RoutesRoutingModule, LayoutModule, DashboardModule],
})
export class RoutesModule {}
