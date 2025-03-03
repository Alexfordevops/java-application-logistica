import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  navToRegister(){
    this.router.navigate(['/register'])
  }
  navToHome(){
    this.router.navigate(['/home'])
  }
}
