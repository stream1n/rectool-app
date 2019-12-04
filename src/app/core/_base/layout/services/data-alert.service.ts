import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Result } from '../../../../graphql/types';

@Injectable()
export class DataalertService {

	private resultssubject = new Subject<any>();

	constructor() {}

	results(message: Result[]) {
		this.resultssubject.next(message);
	}

	getResults(): Observable<any> {
		return this.resultssubject.asObservable();
	}
}
