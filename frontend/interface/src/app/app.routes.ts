import { Routes } from '@angular/router';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { InventoryPageComponent } from './layouts/inventory-page/inventory-page.component';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { authGuard } from './auth.guard';
import { adminGuard } from './guards/admin.guard';
import { Component } from '@angular/core';
import { AcessoNegadoComponent } from './layouts/acesso-negado/acesso-negado.component';
import { RelatoryPageComponent } from './layouts/relatory-page/relatory-page.component';

export const routes: Routes = [
    {path: "", component:LoginPageComponent},
    {path: "login", component:LoginPageComponent},
    {path: "home", component:HomePageComponent, canActivate: [authGuard]}, //Protegida
    {path: "register", component:RegisterPageComponent},
    {path: "inventory", component:InventoryPageComponent, canActivate: [authGuard]}, //Protegida
    {path: "admin", component:AdminPageComponent, canActivate: [adminGuard]},
    {path: "acesso-negado", component:AcessoNegadoComponent},
    {path: "relatory", component:RelatoryPageComponent},
    {path: '**', redirectTo: 'login' }, // Redireciona qualquer outra rota para login (sempre no final)
    
];
