import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class ItemsService {

  apiRoot = 'https://api.mercadolibre.com/items';
  result: Object;
  resultDescription: Object;
  loading: boolean;

  constructor( private http: Http ) {
    this.result = Object;
    this.loading = false;
  }

  public getItem( term: string ) {

    const promise = new Promise( ( resolve, reject ) => {
      const apiURL = `${ this.apiRoot }/${ term }`;

      this.http.get( apiURL )
        .toPromise()
        .then (
          res => {
            this.result = res.json();
            resolve();
          },
          msg => {
            reject( msg );
          }
        );
    });

    return promise;
  }

  public getItemDescription( term: string ) {

  const promise = new Promise( ( resolve, reject ) => {
    const apiURL = `${ this.apiRoot }/${ term }/description`;

    this.http.get( apiURL )
      .toPromise()
      .then (
        res => {
          this.result = res.json();
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
