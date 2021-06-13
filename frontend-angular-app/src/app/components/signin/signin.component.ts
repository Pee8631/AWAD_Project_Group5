import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
   password: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin(){
    this.router.navigate(['/products'])
  }
  signup(){
    this.router.navigate(['/signup'])
  }
}
