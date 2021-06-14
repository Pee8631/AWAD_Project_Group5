import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {productsType} from '../../products.model';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.css']
})
export class MynavbarComponent implements OnInit {

  cart : productsType = []

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
