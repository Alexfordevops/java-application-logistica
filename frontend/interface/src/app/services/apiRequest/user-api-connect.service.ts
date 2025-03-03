import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiConnectService {

  
  private verifyLoginUrl    = "http://localhost:8080/login/verifyUserExist"
  private verifyPasswordUrl = "http://localhost:8080/login/verifyPassword"
  private registerUrl       = "http://localhost:8080/login/registerUser"

  constructor(private http: HttpClient) { }

  //verifica se o usuário existe
  verifyLogin (login: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.verifyLoginUrl}?login=${login}`);
  }

  //verifica se a senha confere no banco de dados
  verifyPassword(login: string, password: any): Observable<boolean>{
    return this.http.post<boolean>(`${this.verifyPasswordUrl}`, { login, password });
  }

  //registra usuário
  registerUser(login: string, form: any) {
    this.verifyLogin(login).subscribe(exist => {
      if (exist) {
        console.log("Server #: User already exist")
        alert("Usuário existe")
      }else{
        this.http.post(this.registerUrl, form).subscribe(pass => {
          if (pass){
            console.log("Server #: User created")
            alert("Usuário criado")
          }else{
            console.log("Server #: Fail")
            alert("Usuário não foi criado")
          }
        })
      }
    })
  }
}
