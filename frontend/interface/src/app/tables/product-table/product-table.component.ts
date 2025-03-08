import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EndpointsService } from '../../services/endpoints/endpoints.service';

@Component({
  selector: 'app-product-table',
  imports: [
    CommonModule,
  ],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {

  listProducts: any[] = [];
  listFilter: any[]   = [];

  constructor(
    private endpoint: EndpointsService
  ){};

  // Filter Section
  filterByName(name: string) {
    if (!name.trim()){
      this.listFilter = this.listProducts;
    }else{
      this.listFilter = this.listProducts.filter(
        product => product.name.toLowerCase() === name.toLowerCase()
      );
    }
  }

  filterByCategory(category: string){
    if (!category.trim()){
      this.listFilter = this.listProducts;
    }else{
      this.listFilter = this.listProducts.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      )
    }
  }

  filterByQuantity(min: number | null, max: number | null) {
    this.listFilter = this.listProducts.filter(product => {
      const quantity = product.quantity;
  
      // Se min estiver vazio, considera 0 como padrão
      const minValid = min !== null && !isNaN(min) ? min : 0;
  
      // Se max estiver vazio, considera um número bem alto como padrão
      const maxValid = max !== null && !isNaN(max) ? max : Infinity;
  
      return quantity >= minValid && quantity <= maxValid;
    });
  }
  
  //

  loadProducts(): void{
    this.endpoint.getAllProducts().subscribe({
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
