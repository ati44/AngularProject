import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catagory } from '../catagory/catagory';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories"


  getcategory(): Observable<catagory[]> {
    return this.http.get<catagory[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),

      catchError(this.handleError)

    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMesagge=""
    if (err.error instanceof ErrorEvent ) {
      errorMesagge='Bir hata oluştu '+err.error.message

    }else{
      errorMesagge="Sistemsel Bir Hata oluştu"
    }
    return throwError (errorMesagge);
  }


  }