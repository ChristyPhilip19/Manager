import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../domain/Login';
@Injectable({
    providedIn: 'root'
  })
  export class LoginService{
    url = "/api/login"

    constructor(private http: HttpClient) { }

    loginUser(login:Login):Observable<Login>{
        return this.http.post<Login>(this.url,login);
      }

  }