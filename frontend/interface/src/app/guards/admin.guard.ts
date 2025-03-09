import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticationService } from '../services/autentication/autentication.service';
import { Observable, tap, of } from 'rxjs';
import { StorageService } from '../services/autentication/storage-service.service';

export const adminGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const authService = inject(AutenticationService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
 

  // Verifica se estamos rodando no browser antes de acessar localStorage
  if (!isPlatformBrowser(platformId)) {
    console.warn("⚠️ O adminGuard está rodando fora do navegador. Bloqueando acesso.");
    router.navigate(['/acesso-negado']);
    return of(false);
  }

  // Verifica se o user-login não retorna null
  const login = localStorage.getItem("user-login");

  if (!login) { 
    console.warn("⚠️ Nenhum usuário encontrado no localStorage.");
    router.navigate(['/acesso-negado']);
    return of(false); // Retorna `false` imediatamente
  }

  // Verifica se o user-login é admin
  return authService.autenticationVerifyAcessLevel(login).pipe(
    tap(isAdmin => {
      console.log('Valor de isAdmin:', isAdmin);
      if (!isAdmin) {
        router.navigate(['/acesso-negado']);
      }
    })
  );
};