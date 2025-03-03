import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { UserApiConnectService } from '../../services/apiRequest/user-api-connect.service';
import { AutenticationService } from '../../services/autentication/autentication.service';

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
    registerForm: FormGroup;
  
    constructor(private fb: FormBuilder,
                private userApi: UserApiConnectService,
                private auth: AutenticationService
    ) {
  
      this.registerForm = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
        name: ['', Validators.required],
      });
    }

    OnSubimit(){
      const login = this.registerForm.value.login;
      const password = this.registerForm.value.password;
      const name = this.registerForm.value.name;
  
      if (this.registerForm.valid){
        this.userApi.registerUser(login, this.registerForm.value)
        this.auth.autenticationForRegistry()
      }

    }
}
