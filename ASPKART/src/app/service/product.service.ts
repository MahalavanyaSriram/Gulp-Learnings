import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Product } from '../product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
   private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  getProducts(category?: string): Observable <Product[]> {
    if(category==undefined){
      return this.http.get(this.url).map(response => response as Product[]);
         
    }
    else{
      return this.http
      .get(`http://localhost:3000/products/?category=${category}`)
      .map(response => response as Product[]);
    }
          
             
}
getProductById(id: number): Promise<Product> {
  const idUrl = `${this.url}/${id}`;
  return this.http.get(idUrl)
    .toPromise()
    .then(response => response as Product)
    .catch(this.handleError);
}


private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
