import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiConnectService {

  
  private verifyLoginUrl = "http://localhost:8080/login/verifyUserExist"
  private verifyPasswordUrl = "http://localhost:8080/login/verifyPassword"

  constructor(private http: HttpClient) { }

  //verifica se o usuário existe
  verifyLogin (login: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.verifyLoginUrl}?login=${login}`);
  }

  verifyPassword(login: string, password: any): Observable<boolean>{
    return this.http.post<boolean>(`${this.verifyPasswordUrl}`, { login, password });
  }
}
