import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.css']
})
export class MynavbarComponent implements OnInit {


  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCounter(){
    return this.cartService.getCounter();
  }  

}
