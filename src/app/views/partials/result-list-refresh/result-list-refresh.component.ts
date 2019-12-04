import { Component, OnInit } from '@angular/core';
import {RecresultsService} from '../../../core/_base/layout';

@Component({
  selector: 'kt-result-list-refresh',
  templateUrl: './result-list-refresh.component.html',
  styleUrls: ['./result-list-refresh.component.scss']
})
export class ResultListRefreshComponent implements OnInit {

	constructor(private recresultsService: RecresultsService) {
	}

	ngOnInit() {
	}

	private refreshResults() {
		this.recresultsService.getresults();
	}

}
