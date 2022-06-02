import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  Signup(user: any): Observable<IUser> {
    return this.http.post<IUser>(`${this.API_URL}/user/signup`, user)
  }
  Signin(user: any): Observable<IUser> {
    return this.http.post<IUser>(`${this.API_URL}/signin`, user)
  }
}
