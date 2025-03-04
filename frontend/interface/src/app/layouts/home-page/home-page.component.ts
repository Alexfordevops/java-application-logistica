import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from '../../forms/create-product/create-product.component';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    LeftMenuComponent,
    CreateProductComponent,
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  createForm: boolean = false;

  createFormShow(newStatus: boolean){
    this.createForm = newStatus;
  }

}
