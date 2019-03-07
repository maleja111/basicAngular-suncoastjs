import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userTable = [];

  constructor() { }

  saveUser(data: Array<any>) {
    // return this.http
    //   .post<Array<{}>>('http://localhost:8081/talks')
    //   .pipe(data => data, catchError(this.handleError));
    this.userTable.push(data);
    localStorage.setItem('userTable', JSON.stringify(this.userTable));
  }
}
