import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from '../../services/autentication/autentication.service';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RedirectService } from '../../services/redirect/redirect.service';
import { log } from 'console';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-login-form',
  standalone:true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AutenticationService,
              private redirectService: RedirectService) {

    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

OnSubimit(){
  const login = this.loginForm.value.login;
  const password = this.loginForm.value.password;

  if (this.loginForm.valid){
    this.auth.autenticationForLogin(login, password); //Cria autenticação
    this.auth.autenticationVerifyAcessLevel(login).subscribe(isAdmin => { //Verifica se é admin
      if (isAdmin) {
        console.log('✅ O usuário é administrador');
      } else {
        console.log('❌ O usuário NÃO é administrador');
      }
    });
    
  }
}

  goToRegister(){
    this.redirectService.navToRegister()
  }
}
