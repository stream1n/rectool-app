import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthenticationGuard} from '../../services/auth/authentication.guard';
import {BaserouterComponent} from './baserouter/baserouter.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: 'dashboard',
		component: BaserouterComponent,
		canActivate: [AuthenticationGuard],
		children: [
			{
				path: '',
				children: [
					{ path: '', component: DashboardComponent }
				]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BaseRoutingModule { }
