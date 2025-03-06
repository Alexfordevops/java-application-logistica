import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from '../../forms/create-product/create-product.component';
import { UpdateProductComponent } from '../../forms/update-product/update-product.component';
import { DeleteProductComponent } from '../../forms/delete-product/delete-product.component';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    LeftMenuComponent,
    CreateProductComponent,
    CommonModule,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  createForm: boolean = false;
  updateForm: boolean = false;
  deleteForm: boolean = false;

  createFormShow(newStatus: boolean){
    this.createForm = newStatus;
    this.updateForm = false;
    this.deleteForm = false;
  }

  updateFormShow(newStatus: boolean){
    this.updateForm = newStatus;
    this.createForm = false;
    this.deleteForm = false;
  }

  deleteFormShow(newStatus: boolean){
    this.deleteForm = newStatus;
    this.createForm = false;
    this.updateForm = false;
  }
}
