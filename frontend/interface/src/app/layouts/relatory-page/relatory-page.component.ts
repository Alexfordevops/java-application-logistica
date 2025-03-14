import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { EndpointsService } from '../../services/endpoints/endpoints.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatory-page',
  imports: [
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './relatory-page.component.html',
  styleUrl: './relatory-page.component.scss'
})
export class RelatoryPageComponent  implements OnInit{

  constructor(
    private endpoint: EndpointsService,
  ){}

  listProducts: any[] = [];
  listCategory: any[] = [];
  productsCount: number = 0;
  totalStockItens: number = 0;

  a: { [category: string]: number } = {};

  loadProducts(): void{
    this.endpoint.getAllProducts().subscribe({
      next: (data) => {
        this.listProducts = data;
        this.getIndicators();
        console.log("Server #: Products load sucefully");
      },
      error: (err) => {
        err = "Failed"
        console.log("Server #: Products load failed", err);
      }
    })
  }

  getIndicators(): void{
    // Conta quantos produtos cadastrados existem
    this.productsCount = this.listProducts.length;

    // Soma a quantitade total de produtos cadastrados 
    this.totalStockItens = this.listProducts.reduce((total, product) => total + product.quantity, 0);

    // Gera a lista das categorias únicas
    this.listProducts.forEach(product => {
      if (!this.listCategory.includes(product.category)) {
          this.listCategory = [...this.listCategory, product.category];
      }
  });

    // Soma a quantidade de produtos cadastrados agrupados por categoria
    this.totalQuantityByCategory();
  }

  totalQuantityByCategory(): void{

    // Criar um mapa ou objeto para armazenar o total de itens por categoria
    const categoriaQuantidades: { [key: string]: number } = {}; // Objeto para armazenar as quantidades

    // Preencher o mapa/objeto com as quantidades por categoria
    this.listProducts.forEach(product => {
        if (!categoriaQuantidades[product.category]) {
            categoriaQuantidades[product.category] = 0; // Inicializa a categoria se não existir
        }
        categoriaQuantidades[product.category] += product.quantity; // Soma a quantidade
    });

    // Agora, categoriaQuantidades terá o total de itens por categoria
    console.log(categoriaQuantidades); // Exibe o resultado no console (pode ser usado na UI também)

    // Se quiser mostrar o resultado, você pode atribuir essa informação a outra variável:
    this.a = categoriaQuantidades;
    
  }


  ngOnInit(): void {
      this.loadProducts();
  }
}
