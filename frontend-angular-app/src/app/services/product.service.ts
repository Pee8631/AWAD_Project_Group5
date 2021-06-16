import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any;
  updateid : number = 0;

  constructor(private http: HttpClient) { }

  addProduct(product: any){
    return this.http.post<any>('http://localhost:3000/products/add', product)
      .pipe(map(data => {
        return data;
      }));
  }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products/get')
      .pipe(map(data => {
        if (data) {
          this.products = data;
          console.log(this.products);
        }
        return this.products;
      }));
  }

  getOneProducts(id: number){
    return this.http.get<any>('http://localhost:3000/products/getid/' + id)
      .pipe(map(data => {
        if (data) {
          this.products = data;
          console.log(this.products);
        }
        return this.products;
      }));
  }

  setupdateProducts(id: number){
    this.updateid = id;
  }

  getupdateProducts(){
    return this.updateid;
  }

  putProducts(id: number, body: any){
    return this.http.put<any>('http://localhost:3000/products/put' + id, body)
      .pipe(map(data => {
        if (data) {
          this.products = data;
          console.log(this.products);
        }
        return this.products;
      }));
  }

 

  deleteProducts(id: number){
    console.log(id)
    return this.http.delete<any>('http://localhost:3000/products/delete/' + id)
      .pipe(map(data => {
        return data;
        
      }));
  }

  getSomeproducts(id:number){
    console.log(this.products[id]);
    return this.products[id];
  }

}

