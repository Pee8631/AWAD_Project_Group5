import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  
  paymentForm = new FormGroup({
    bank: new FormControl('',[Validators.required]),
    accountID: new FormControl('',[Validators.required]),
    accountName: new FormControl('',[Validators.required]),
  });

  

  ngOnInit(): void {
  }
  resetForm(){
    this.paymentForm.reset();
    //this.previewLoaded = false;
  }

}
