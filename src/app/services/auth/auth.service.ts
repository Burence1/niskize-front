import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login_url ='http://127.0.0.1:8000/auth/login/'
  register_url ='http://127.0.0.1:8000/auth/register/'
  logout_url ='http://127.0.0.1:8000/auth/logout/'
  user_url ='http://127.0.0.1:8000/auth/user/'

  constructor(private http:HttpClient) { }

  login(data: { username: string; password: string }) {
    return this.http.post(this.login_url, data, { withCredentials: false });
  }

  register(data: { username: string; email: string; password: string }) {
    return this.http.post(this.register_url, data);
  }

  getUser() {
    return this.http.get(this.user_url, { withCredentials: false });
  }
  logout() {
    return this.http.post(this.logout_url, {}, { withCredentials: false });
  }
}