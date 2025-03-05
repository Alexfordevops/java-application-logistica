import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-product',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  
  productForm!: FormGroup;
  products: any[] = [];
  selectedProduct: any = null;
  apiGetUrl: string = 'http://localhost:8080/products/getAll'
  apiPutUrl: string = 'http://localhost:8080/products/update/byName'
  apiTestUrl: string = 'http://localhost:8080/products/update'


  constructor(private fb: FormBuilder,
              private http: HttpClient
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
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      creationDate: [{ value: '', disabled: true }] // Desativado, pois não pode ser alterado
    });
  }

  OnSubimit():void{
    if (this.productForm.valid){
      const productData = this.productForm.getRawValue();
      console.log(productData.id)
      this.http.put(`${this.apiTestUrl}/${productData.id}`, productData).subscribe({
        next: () => console.log("Server #: Data updated sucefully"),
        error: (err) => console.log(("Server #: (error) Data update error"))
      });
    }else{
      alert('Preencha todos os campos corretamente.');
    }
  }
}
