import { Component } from '@angular/core';
import { AutenticationService } from '../../services/autentication/autentication.service';
import { RedirectService } from '../../services/redirect/redirect.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    private auth: AutenticationService,
    private redirect: RedirectService
  ){}

  goToHome(){
    this.redirect.navToHome();
  }
  logout(){
    this.auth.autenticationDelete();
  }

}
