import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Result } from '../../../graphql/types';
import {ALL_RESULTS_QUERY, AllResultQueryResponse } from '../../../graphql/graphql';

@Component({
  selector: 'kt-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

	results: Result[] = [];
	loading: boolean = true;

	constructor(private apollo: Apollo) {
	}

	ngOnInit() {
		this.apollo.watchQuery({
			query: ALL_RESULTS_QUERY
		}).valueChanges.subscribe((response: any) => {
			this.results = response.data.results;
			this.loading = response.data.loading;
		});

	}

}
