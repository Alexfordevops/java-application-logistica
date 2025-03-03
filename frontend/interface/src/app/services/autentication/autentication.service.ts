import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiConnectService } from '../apiRequest/user-api-connect.service';
import { StorageService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(private router: Router,
              private userApi: UserApiConnectService,
              private storageService: StorageService) { }

  autenticationForLogin(login: string, password: any) {
    // Verifica se o login existe de forma assíncrona
    this.userApi.verifyLogin(login).subscribe(existe => {
      if (existe) {
        console.log("Server #: User exist in database")
        // Verifica se a senha está correta
        this.userApi.verifyPassword(login, password).subscribe(senhaValida => {
          if (senhaValida) {
            this.storageService.setItem('token', 'user-token'); // Armazena o token
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

}
