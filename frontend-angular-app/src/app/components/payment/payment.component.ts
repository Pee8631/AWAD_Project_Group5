import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private py: PaymentService, private router : Router) { }
  
  paymentForm = new FormGroup({
    bank: new FormControl('',[Validators.required]),
    accountID: new FormControl('',[Validators.required]),
    accountName: new FormControl('',[Validators.required]),
  });

  addPayment(){
    if(this.paymentForm.value.bank != "" &&  this.paymentForm.value.accountID != "" && this.paymentForm.value.accountName != ""){
    this.py.addPayment(this.paymentForm.value).subscribe(
      data => {
          console.log(data)
        alert('เพิ่มบัญชีเรียบร้อยแล้ว');
        this.paymentForm.reset();
        this.router.navigate(['/products'])
      },
      err =>{
        console.log(err);
      });
    }
    else{
      alert('กรุณาใส่ข้อมูลให้ครบทุกช่อง');
    }
  }

  

  ngOnInit(): void {
  }

  resetForm(){
    this.paymentForm.reset();
    //this.previewLoaded = false;
  }

}
