import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchService {

  apiRoot = 'https://api.mercadolibre.com/sites/MLA/search';
  results: Object[];
  loading: boolean;

  constructor( private http: Http ) {
    this.results = [];
    this.loading = false;
  }

  public getResult( term: string, limit: number ) {

    const promise = new Promise( ( resolve, reject ) => {
    const apiURL = `${ this.apiRoot }?q=${ term }`;

    this.http.get( apiURL )
      .toPromise()
      .then (
        res => {
            this.results = res.json().results;
            resolve();
        },
        msg => {
            reject( msg );
        }
      );
    });

    return promise;
  }
}
