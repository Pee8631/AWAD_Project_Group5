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
    username: new FormControl(''),
    password: new FormControl(''),
    name : new FormControl(''),
    gender: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    Tel : new FormControl('')
});
get email() {return this.profileForm.get('email');
}


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.profileForm.value);
    this.auth.signUp(this.profileForm.value).subscribe(
      data => {
        if(data.message)
          alert(data.message);
        
      },err => {
        console.log(err);

      });
  }
  
    signin(){
      this.router.navigate(['./signin']);
    }
  


}
