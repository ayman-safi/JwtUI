import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:51128/api/account/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();

constructor(private http: HttpClient) { }

// login(Email: string, Password: string) {
//   return this.http.post<any>(this.baseUrl + 'login', { Email, Password })
//       .pipe(map(user => {
//           if (user && user.token) {
//               localStorage.setItem('currentUser', JSON.stringify(user));
//           }

//           return user;
//       }));
// }
login(user: User): Observable<User> {
  delete user['id'];
  return this.http.post<User>(this.baseUrl + 'login', user);
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
