import { Component } from '@angular/core';
import { AutenticationService } from '../../services/autentication/autentication.service';
import { RedirectService } from '../../services/redirect/redirect.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';

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

  goToInventory(){
    this.redirect.navToInventory();
  }

  logout(){
    this.auth.autenticationDelete();
  }

  goToAdmin(){
    this.redirect.navToAdmin();
  }

  goToRelatory(){
    this.redirect.navToRelatory();
  }
}
