import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(
    private http: HttpClient
  ) { }

  //Endpoints
  getAllProductsUrl = 'http://localhost:8080/products/getAll'
  getIsAdminUrl = 'http://localhost:8080/login/isAdmin';

  //Products
  getAllProducts(endpoint: string = this.getAllProductsUrl): Observable<any[]> {
    return this.http.get<any[]>(endpoint);
  }

  //Autentication
  getIsAdmin(login:string): Observable<boolean>{
    const endpoint = this.getIsAdmin;
    return this.http.get<{ isAdmin: boolean }>(`${endpoint}/${login}`).pipe(
      map(response => response.isAdmin)
    );
  }

}
