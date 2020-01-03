npm install firebase --save
npm install firebaseui --save
npm install @angular/fire --save
npm install apollo-angular --save
npm install apollo-angular-link-http --save
apollo-cache-inmemory
apollo-client
apollo-link-context
apollo-link-http
graphql
graphql-tag

ng g component public/login
ng g component public/terms
ng g component public/privacy
ng g component public/about
ng g component public/team
ng g component public/contact
ng g component public/page-not-found
	
ng g s auth/services/authentication
ng g g auth/guard/authentication
   
ng g module graphql

@import "~firebaseui/dist/firebaseui.css"; into style.scss


src/app/views/partials/layout/topbar/user-profile/user-profile.component... files were updated
src/app/views/theme/footer/footer.component.html was updated

ng g s data/services/dataalert
ng g s data/services/recresults

Add to app.module.ts providers
		DataalertService,
		RecresultsService
		
		
ng g c views/partials/layout/result-list-refresh
ng g c views/partials/layout/result-list

add to src/app/views/partials/partials.module.ts exports
		ResultListRefreshComponent,
		ResultListComponent,

Update the environment files, adding:
	firebase: {
		apiKey: 'AIzaSyBvUgdsykhk4CEry9WcwRVa7nh9H2h5e60',   ( from Identity Platform -> Providers -> Application setup details )
		authDomain: 'streamin-263110.firebaseapp.com'
	},
	graphql: {
		url: '/graphql'
	},
	
# Metronic Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
