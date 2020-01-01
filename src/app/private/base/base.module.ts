import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaserouterComponent } from './baserouter/baserouter.component';
import { ThemeModule } from '../../views/theme/theme.module';
import { PartialsModule } from '../../views/partials/partials.module';

@NgModule({
  declarations: [DashboardComponent, BaserouterComponent],
  imports: [
  	CommonModule,
	  BaseRoutingModule,
	  ThemeModule,
	  PartialsModule
  ]
})
export class BaseModule { }
