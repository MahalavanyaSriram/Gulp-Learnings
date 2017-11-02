import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../product';

@Injectable()
export class ProductSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Product[]> {
    console.log(term);
    return this.http
               .get(`http://localhost:3000/products/?productName=${term}`)
               .map(response => {
    console.log(response);
return response.json().data as Product[]});
  }
}
