import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import { Register } from '../domain/Register';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "/api/register"
//url = "http://localhost:8080/register"

  constructor(private http: HttpClient) { }

  addUser(register:Register):Observable<Register>{
    return this.http.post<Register>(this.url,register);
  }
}
