import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private http: HttpClient, public local: LocalStorageService) { }

  signIn(authData: any){
    return this.http.post<any>('http://localhost:3000/login/signin', authData)
    .pipe(map(data => {
        if(data){
          this.local.set('user', data, 1, 'w');
          console.log(this.local.get('user'));
        }
        return data;
      }));
  }
  signUp(authData: any){
    return this.http.post<any>('http://localhost:3000/user/signup', authData);
  }


  getProfile(){
    return this.http.get<any>('http://localhost:3000/user/profile')
      .pipe(map(data => {
        if (data) {
          this.user = data;
          console.log(this.user);
        }
        return this.user;
      }));
  }
}
