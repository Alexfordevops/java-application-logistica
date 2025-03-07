import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductTableComponent } from '../../tables/product-table/product-table.component';

@Component({
  selector: 'app-inventory-page',
  imports: [
    CommonModule,
    NavbarComponent,
    ProductTableComponent
],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.scss'
})
export class InventoryPageComponent {

}
