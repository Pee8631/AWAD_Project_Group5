import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'
import { productsType } from 'src/app/products.model';
import { NumberValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : productsType = []
  constructor(private cartService: CartService) { 
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

  getsumPrice(){
    return this.cartService.getsumPrice();
  }

  deleteCart(id: number,price: number){
    return this.cartService.deleteCart(id,price);
  }
}
