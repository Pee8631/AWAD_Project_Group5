import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name : new FormControl(''),
    gender: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
});
get email() {return this.profileForm.get('email');
}
get stdid() {return this.profileForm.get('stdid');
}

  constructor() { }

  ngOnInit(): void {
  }

}
