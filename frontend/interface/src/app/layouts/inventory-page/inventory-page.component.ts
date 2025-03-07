import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-inventory-page',
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.scss'
})
export class InventoryPageComponent {

  apiGetUrl: string = 'http://localhost:8080/products/getAll';
  listProducts: any[] = [];
  listFilter: any[] = [];

  constructor(
    private http: HttpClient,
  ){};

  filterByName(name: string) {
    if (!name.trim()){
      this.listFilter = this.listProducts;
    }else{
      this.listFilter = this.listProducts.filter(
        product => product.name.toLowerCase() === name.toLowerCase()
      );
    }
  }
  
  loadProducts(): void{
    this.http.get<any[]>(this.apiGetUrl).subscribe({
      next: (data) => {
        this.listProducts = data;
        this.listFilter = this.listProducts;
        console.log("Server #: Products load sucefully");
      },
      error: (err) => {
        err = "Failed"
        console.log("Server #: Products load failed", err);
      }
    })
  }

  ngOnInit(): void {
    this.loadProducts();   
  }
}
