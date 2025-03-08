import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(
    private http: HttpClient
  ) { }

  //Endpoints
  getAllProductsUrl = 'http://localhost:8080/products/getAll'

  //Products
  getAllProducts(endpoint: string = this.getAllProductsUrl): Observable<any[]> {
    return this.http.get<any[]>(endpoint);
  }
}
