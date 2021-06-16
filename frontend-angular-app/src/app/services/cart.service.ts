import { Injectable } from '@angular/core';
import {productsType} from '../products.model'
import { ProductService } from './product.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter : number = 0;
  sumPrice: number = 0;
  quantitynum: number = 0;
  cart: productsType = [];
  backupcart: any;

  constructor(private productService: ProductService) { }

  add(id: number){
    console.log('Add product id: '+ id +' to cart');
    this.quantitynum = this.productService.getSomeproducts(id).quantity; 
    if(this.quantitynum > 0){
      this.quantitynum -= 1;
      this.cart.push(this.productService.getSomeproducts(id));
      this.sumPrice += this.productService.getSomeproducts(id).price;
      this.counter = this.cart.length;
      this.productService.getSomeproducts(id).quantity = this.quantitynum;
    }
  }

  deleteCart(){
    this.backupcart = this.cart.pop();
    //console.log(this.backupcart.price);
    //this.quantitynum = this.productService.getSomeproducts(id).quantity; // ไม่รู้จัก quantity
    //this.quantitynum += 1;
    this.sumPrice -= this.backupcart.price;
    this.counter = this.cart.length;
    //this.productService.getSomeproducts(this.backupcart.id).quantity = this.quantitynum;
  }

  getCounter(){
    return this.counter;
  }

  getsumPrice(){
    
    return this.sumPrice;
  }

  getCart(){
    return this.cart;
  }
  
  
}


