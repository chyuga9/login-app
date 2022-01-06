import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username! : string;
  public password! : string;
  
  constructor(private http: HttpClient) { }

  login(username: string, password:string){
    return this.http.get(environment.hostUrl + '/test',
    {headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
    this.username = username;
    this.password = password;
    this.registerSuccessfulLogin(username, password);
  }));
  }
  createBasicAuthToken(username:string, password:string){
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: string, password: string){
    // save the username to session
  }
}
