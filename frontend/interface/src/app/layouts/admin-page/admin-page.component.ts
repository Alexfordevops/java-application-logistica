import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { UsersTableComponent } from '../../tables/users-table/users-table.component';

@Component({
  selector: 'app-admin-page',
  imports: [
    NavbarComponent,
    UsersTableComponent,
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
