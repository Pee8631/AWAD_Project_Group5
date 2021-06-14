import { Component, OnInit } from '@angular/core';

interface user_profile{
  name: string,
  email: string,
  phone: string,
  img: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      name: '',
      email: '',
      phone: '',
      img: 'https://kimtaehyung768069742.files.wordpress.com/2018/09/e0b981e0b897e0b8aee0b8a2e0b8ade0b887e0b8ade0b988e0b8b2e0b8b2.jpg',
    }
  }

  ngOnInit(): void {
  }

}
