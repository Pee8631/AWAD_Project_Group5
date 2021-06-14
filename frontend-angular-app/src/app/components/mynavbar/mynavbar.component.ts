import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.css']
})
export class MynavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AddProduct(){
    this.router.navigate(['/addproducts'])
  }
  ShowProducts(){
    this.router.navigate(['/showproducts'])
  }

}
