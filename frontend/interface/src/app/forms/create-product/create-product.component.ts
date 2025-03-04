import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Importe o ReactiveFormsModule

@Component({
  selector: 'app-create-product',
  imports: [
    CommonModule,
    ReactiveFormsModule  // Não se esqueça de incluir aqui!
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  createProductForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createProductForm = this.fb.group({
      name: ['', [Validators.required]],  // nome do produto
      category: ['', [Validators.required]],  // categoria
      quantity: ['', [Validators.required, Validators.min(1)]],  // quantidade
      price: ['', [Validators.required, Validators.min(0)]],  // preço
      creationDate: [{ value: new Date(), disabled: true }]  // data de criação (não editável)
    });
  }

  onSubmit(): void {
    if (this.createProductForm.valid) {
      console.log(this.createProductForm.value);
      // Aqui você pode enviar os dados para o backend (API)
    } else {
      console.log('Formulário inválido');
    }
  }
}
