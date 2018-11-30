import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Customer } from '../store/models/customer';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';  //rxjs v:6
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
      let url = 'assets/customers.json';
      //return this.httpClient.get<Customer[]>(url);
      return this.httpClient.get<Customer[]>(url)
        .pipe(
          catchError(this.handleError)
      );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



}
