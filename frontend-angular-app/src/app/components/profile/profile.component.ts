import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  constructor(private local: LocalStorageService) {
  } 
    

  ngOnInit(): void {
  }

  getUser() {

    return this.local.get('user').result.username
  }
  getName(){
    return this.local.get('user').result.name
  }

  getGender(){
    return this.local.get('user').result.gender
  }

  getEmail(){
    return this.local.get('user').result.email
  }

  getTel(){
    return this.local.get('user').result.Tel
  }


}
