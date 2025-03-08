import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from './services/autentication/storage-service.service';
import { AutenticationService } from './services/autentication/autentication.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private auth: AutenticationService
  ) {}

  canActivate(): boolean {
    const token = this.storageService.getItem('token'); // Agora acessa via StorageService
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

