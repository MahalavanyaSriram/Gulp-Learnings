import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Products } from './products';

@Injectable()
export class ProductService {
  private url = 'http://localhost:3000/';
  constructor(private http: Http) { }
  getProducts(): Promise <Products[]> {
  return this.http.get(this.url + 'products')
             .toPromise()
             .then(res => <Products[]> res.json().data)

                          .then(data => { return data; })

             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}

