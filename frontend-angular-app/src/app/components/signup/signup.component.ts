import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    Tel: new FormControl('', [Validators.required])
  });
  get email() {
    return this.profileForm.get('email');
  }


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    if(this.profileForm.value.username != "" && this.profileForm.value.password != "" && this.profileForm.value.name != "" 
    && this.profileForm.value.gender != "" && this.profileForm.value.email != "" && this.profileForm.value.Tel != ""){
    try {
      console.log(this.profileForm.value);
      this.auth.signUp(this.profileForm.value).subscribe(
        data => {
          if (data.message)
            alert(data.message);

        }, err => {
          console.log(err);

        });
      alert('สมัครสมาชิกเรียบร้อยแล้ว');
      this.router.navigate(['./signin']);
    } catch (error) {
      console.log(error);
    }
  }
  else{
    alert('กรุณาใส่ข้อมูลให้ครบทุกช่อง');
  }

  }

  signin() {
    this.router.navigate(['./signin']);
  }



}
