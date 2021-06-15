import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any

  constructor(private ps : ProductService, private cartService : CartService ) {
    this.onLoading();
  }

  ngOnInit(): void { }

  onLoading(){
    try {
      this.ps.getProducts().subscribe(
        data => {
          this.products = data;
        },
        err => {
          console.log(err)
        });
    }catch (error) {
      console.log(error)
    }
  }

  addToCart(id:number){
    this.cartService.add(id)
  }

}
