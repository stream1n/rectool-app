// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../app/public/login/login.component';
import {TermsComponent} from '../app/public/terms/terms.component';
import {PrivacyComponent} from '../app/public/privacy/privacy.component';
import {PageNotFoundComponent} from '../app/public/page-not-found/page-not-found.component';
import {AboutComponent} from './public/about/about.component';
import {TeamComponent} from './public/team/team.component';
import {ContactComponent} from './public/contact/contact.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'team', component: TeamComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

/*const routes: Routes = [
	{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: '403... Access forbidden',
					desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator',
				},
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
		],
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];
*/
@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
