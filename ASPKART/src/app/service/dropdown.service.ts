import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DropdownService {
  categorys: string[];

  private url = 'http://localhost:3000/category';
  constructor(private http: HttpClient) { }
  getCategorys(): Promise<string[]> {

    return this.http.get(this.url).toPromise()
      .then(response => response as string[])
      .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}