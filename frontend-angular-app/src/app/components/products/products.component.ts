import { Component, OnInit } from '@angular/core';
import { MynavbarComponent } from '../mynavbar/mynavbar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any

  constructor() {
  }

  ngOnInit(): void { }

  

}
