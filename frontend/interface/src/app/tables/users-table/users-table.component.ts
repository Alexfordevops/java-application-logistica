import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/autentication/storage-service.service';

@Component({
  selector: 'app-users-table',
  imports: [
    CommonModule
  ],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent {
  
  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ){}

  usersList: any[]                      = []
  listFilter: any[]                     = []
  currentUserLogin: string              = '';
  allUserColor: string                  = '';
  statusUserColor: string               = '';
  yourLogin: string                     = '';
  userLabels: { [key: string]: string } = {}; // Armazena "Your Login" para o usuário correto

  loadUsers():void {
    const endpoint = 'http://localhost:8080/users'

    this.http.get<any[]>(endpoint, {withCredentials:true}).subscribe({
      next: (data) => {
        this.usersList = data;
        this.listFilter = this.usersList;
        this.forEachUser();
        console.log("Server #: Users list load sucefully");
      },
      error: (err) => {
        err = "Failed";
        console.log("Server #: (ERROR) Users list failed to load", err);
      }
    });
  }

  filterByLogin(login: string) {
    if (!login.trim()){
      this.listFilter = this.usersList;
    }else{
      this.listFilter = this.usersList.filter(
        user => user.login.toLowerCase() === login.toLowerCase()
      );
    }
  }

  ngOnInit(): void{
    this.loadUsers();
    this.currentUserLogin = localStorage.getItem("user-login") || '';
  }

  forEachUser(): void {
    this.listFilter.forEach(user => this.changeCurrentLoginColor());
    this.listFilter.forEach(user => this.changeCurrentLoginLabel(user));
  }

  changeCurrentLoginColor(): void {
    const currentUserLogin = this.storage.getItem("user-login");

    if (this.listFilter.some(u => u.login === currentUserLogin)) {
      this.allUserColor = 'gray';
    }
  }
  
  changeCurrentLoginLabel(user: any): void {
    if (user.login === this.currentUserLogin) {
      this.userLabels[user.login] = '(Your Login)'; // Apenas o usuário logado terá essa label
    }
  }
}
