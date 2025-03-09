import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiConnectService } from '../apiRequest/user-api-connect.service';
import { StorageService } from './storage-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { EndpointsService } from '../endpoints/endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(
    private router: Router,
    private userApi: UserApiConnectService,
    private storageService: StorageService,
    private http: HttpClient,
    
  ) { }
  private loginUser: string         = '';
  private setAuthenticationUrl      = "http://localhost:8080/login/setAuthentication"
  private getAuthenticationLoginUrl = "http://localhost:8080/login/getAuthentication/login"
  private getAcessLevelUrl          = "http://localhost:8080/login/getAuthentication/acessLevel"

  //Autentication session

  autenticationForLogin(login: string, password: any) {
    // Verifica se o login existe de forma assíncrona
    this.userApi.verifyLogin(login).subscribe(existe => {
      if (existe) {
        console.log("Server #: User exist in database")
        // Verifica se a senha está correta
        this.userApi.verifyPassword(login, password).subscribe(senhaValida => {
          if (senhaValida) {
            this.storageService.setItem('token', 'user-token'); // Armazena o token
            this.storageService.setItem('user-login', login); // Armazena o login
            this.router.navigate(['/home']); // Redireciona para o home após o login
          } else {
            alert("Senha inválida");
            console.log("Server #: Ivalid password")
          }
        });
      } else {
        alert('Usuário não existe');
        console.log("Server #: User don't exist in database")
      }
    });
  }

  autenticationForRegistry(){
    this.storageService.setItem('token', 'user-token'); // Armazena o token
    this.router.navigate(['/home']); // Redireciona para o home após o login
    console.log("Server #: autentication by registry")
  }

  autenticationDelete(){
    this.storageService.setItem('token', ''); // Remove o token
    this.router.navigate(['/login']); // Redireciona para a página de login
  }

  autenticationVerifyAcessLevel(login:string): Observable<boolean>{
    const endpoint = 'http://localhost:8080/login/isAdmin'

    return this.http.get<{ isAdmin: boolean }>(`${endpoint}/${login}`, { withCredentials: true }).pipe( //pipe para retorno boolean true or false
      map(response => response.isAdmin)
    );
  }

  autenticationSetLogin(login: string){
    this.storageService.setItem(login,"user-login")
  }

  autenticationGetLogin(){
    this.storageService.getItem("user-login")
  }





  

  sessionAdmin(): Observable<boolean> {
    const endpoint = 'http://localhost:8080/login/sessionAdmin';

    return this.http.get<{ isAdmin: boolean }>(endpoint, { withCredentials: true }).pipe(
      map(response => response.isAdmin)
    );
  }

  autenticateUser(login:string): Observable<any>{
    return this.http.post<string>(`${this.setAuthenticationUrl}/${login}`, {login}, { withCredentials: true });

  }
}
