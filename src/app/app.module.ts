import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { RoutesModule } from './routes/routes.module'
import { LayoutModule } from './layout/layout.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		RoutesModule,
		RouterModule,
		LayoutModule,
		SharedModule,
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
