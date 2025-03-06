import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-product',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent {

  productForm!: FormGroup;
  products: any[] = [];
  selectedProduct: any = null;
  apiGetUrl: string = 'http://localhost:8080/products/getAll'
  apiDeleteUrl: string = 'http://localhost:8080/products/delete'

  constructor(private fb: FormBuilder,
              private http: HttpClient,
  ){}

  loadProducts(): void {
    this.http.get<any[]>(this.apiGetUrl).subscribe({
      next: (data) =>{
        this.products = data
        console.log("Server #: Products load sucefully")
      },
      error: (err) => {
        console.log("Server #: (error) Products failed to load")
      }
    })
  }

  selectProduct(product: any): void{
    this.selectedProduct = product;
    this.productForm.patchValue({
      id: product.id,
      name: product.name,
      category: product.category,
      quantity: product.quantity,
      price: product.price,
      creationDate: product.creationDate
    });
  }

  ngOnInit(): void {

    this.loadProducts();

    this.productForm = this.fb.group({
      id: [{ value: '', disabled: true }], // ID do produto (para envio à API)
      name: [{ value: '', disabled: true }],
      category: [{ value: '', disabled: true }],
      quantity: [{ value: '', disabled: true }],
      price: [{ value: '', disabled: true }],
      creationDate: [{ value: '', disabled: true }] // Desativado, pois não pode ser alterado
    });
  }

  OnSubimit():void{
    const productData = this.productForm.getRawValue();
    console.log(`DELETE URL: ${this.apiDeleteUrl}/${productData.id}`);
      this.http.delete(`${this.apiDeleteUrl}/${productData.id}`).subscribe({
        next: () => {console.log("Server #: Product deleted sucefully"),
                     alert("Produto deletado"),
                     this.loadProducts();
                    },
        error: (err) => {console.log(("Server #: (error) Data delete error")), alert(`Erro ao deletar: ${err.status} - ${err.message}`);}
        
      });
  }
}
