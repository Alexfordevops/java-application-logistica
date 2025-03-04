import { Routes } from '@angular/router';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "", component:LoginPageComponent},
    {path: "login", component:LoginPageComponent},
    {path: "home", component:HomePageComponent, canActivate: [authGuard]}, //Protegida
    {path: "register", component:RegisterPageComponent},
    { path: '**', redirectTo: 'login' } // Redireciona qualquer outra rota para login
];
