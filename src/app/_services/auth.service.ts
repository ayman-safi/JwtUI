import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/acoount/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();

constructor(private http: HttpClient) { }
login(username: string, password: string) {
  return this.http.post<any>(this.baseUrl + 'login', { username, password })
      .pipe(map(user => {
          if (user && user.token) {
              localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
      }));
}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}
loggedIn() {
  return this.jwtHelper.isTokenExpired();
}
logout() {
  localStorage.removeItem('currentUser');
}
}
