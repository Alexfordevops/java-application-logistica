import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticationService } from '../services/autentication/autentication.service';
import { Observable, map, tap } from 'rxjs';
import { LoginFormComponent } from '../forms/login-form/login-form.component';

export const adminGuard: CanActivateFn = (route, state): Observable<boolean> => {

  const authService = inject(AutenticationService); // Injetando o serviço de autenticação
  const router = inject(Router);

  const login = authService.getLogin(); // Obtendo o login do usuário

  return authService.autenticationVerifyAcessLevel(login).pipe(
    tap(isAdmin => {
      if (!isAdmin) {
        router.navigate(['/acesso-negado']); // Redireciona se não for admin
      }
    })
  );
};
