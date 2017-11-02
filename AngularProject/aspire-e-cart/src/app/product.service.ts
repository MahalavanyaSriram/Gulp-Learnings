import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {
   private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/products';
  constructor(private http: Http) { }
  getProducts(): Promise <Product[]> {
  return this.http.get(this.url).toPromise()
                                       .then(response => response.json().data as Product[])
             .catch(this.handleError);
}
getProductById(id: string): Promise<Product> {
  const idUrl = `${this.url}/${id}`;
  return this.http.get(idUrl)
    .toPromise()
    .then(response => response.json().data as Product)
    .catch(this.handleError);
}
getProductByDepartment(department: string): Promise<Product[]> {
  const idUrl = `${this.url}/${department}`;
  return this.http.get(idUrl)
    .toPromise()
    .then(response => response.json().data as Product[])
    .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const idUrl = `${this.url}/${id}`;
  return this.http.delete(idUrl, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

create(product: Product): Promise<Product> {
  return this.http
    .post(this.url, JSON.stringify({product: product}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Product)
    .catch(this.handleError);
}


private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
