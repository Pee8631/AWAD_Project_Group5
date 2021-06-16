import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.css']
})
export class MynavbarComponent implements OnInit {


  constructor(private router: Router, private cartService: CartService) { }

  @Input() delcart : number = 0;

  delnum : number = 0;

  ngOnInit(): void {
    this.delnum = this.cartService.counter;

  }

  getCounter(){
    return this.cartService.getCounter();
  }  

}
