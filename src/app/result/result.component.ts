import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../shared/search.service';
import { ResultPipe } from './result.pipe';
import { CurrentBRPipe } from './current-br.pipe';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    providers: [ SearchService ]
})
export class ResultComponent implements OnInit {

    sub: any;

    constructor(
        private _route: ActivatedRoute,
        public searchService: SearchService
    ) {}

    public doSearch( term : string ) {
        this.searchService.getResult( term, 4 );
    }

    ngOnInit() {
      this.sub = this._route.queryParams.subscribe(
          params => this.doSearch( params['q'] )
      );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
