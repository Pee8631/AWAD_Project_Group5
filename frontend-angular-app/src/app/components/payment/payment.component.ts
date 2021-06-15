import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private py: PaymentService) { }
  
  paymentForm = new FormGroup({
    bank: new FormControl('',[Validators.required]),
    accountID: new FormControl('',[Validators.required]),
    accountName: new FormControl('',[Validators.required]),
  });

  addPayment(){
    this.py.addPayment(this.paymentForm.value).subscribe(
      data => {
        console.log(data)
        alert('successfully');
        this.paymentForm.reset();
      },
      err =>{
        console.log(err);
      });
  }

  

  ngOnInit(): void {
  }
  resetForm(){
    this.paymentForm.reset();
    //this.previewLoaded = false;
  }

}
