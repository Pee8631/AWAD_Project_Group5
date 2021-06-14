import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'
import { productsType } from 'src/app/products.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : productsType = []
  constructor(private cartService: CartService) { 
    //this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }
  getCounter(){
    //return this.cartService.getCounter();
  }

  getSumPeice(){
    //return this.cartService.gettotal();
  }
}
