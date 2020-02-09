import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/product"


  addProduct(product: product): Observable<product> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      }


      )
    }

    return this.http.post<product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),

      catchError(this.handleError)
    );


  }

  getproduct(categoryId): Observable<product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = this.path + "?categoryId=" + categoryId
    }

    return this.http.get<product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),

      catchError(this.handleError)

    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMesagge = ""
    if (err.error instanceof ErrorEvent) {
      errorMesagge = 'Bir hata oluştu ' + err.error.message

    } else {
      errorMesagge = "Sistemsel Bir Hata oluştu"
    }
    return throwError(errorMesagge);
  }


}
