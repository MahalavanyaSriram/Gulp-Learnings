import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';

@Injectable()
export class CartService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/cart';
  isProductPresent:boolean;
  product:Product;
  constructor(private http: HttpClient) { }
  getProducts(): Promise <Product[]> {
    
  return this.http.get(this.url).toPromise().then(response => response as Product[]);
         
             
}
getProductById(id:number):Promise<Product>{
  const idUrl = `${this.url}/${id}`;
  return this.http.get(idUrl).toPromise()
  .then(response =>response as Product)
  .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const idUrl = `${this.url}/${id}`;
   this.getProductById(id).then(product=>{
     if( product["quantity"]>1){
    product["quantity"]-=1;
    this.update(product);
    
     }
     else{
     this.deleteFromDB(product.id)
     }
  })
  return null;
}
deleteFromDB(id:number): Promise<void>{
  const idUrl = `${this.url}/${id}`;
  return this.http.delete(idUrl)
  .toPromise()
  .then(() => null)
  .catch(this.handleError);
}

addtoDB(product:Product):Promise<void>{
  product["quantity"]= 1;
  return this.http.post(this.url, product).toPromise().then(() => null)
  .catch(this.handleError);
}

update(product: Product): Promise<Product> {
  const idUrl = `${this.url}/${product.id}`;
  return this.http
    .put(idUrl,product)
    .toPromise()
    .then(() => product)
    .catch(this.handleError);
}
private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
