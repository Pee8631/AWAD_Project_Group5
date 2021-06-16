import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-showpayment',
  templateUrl: './showpayment.component.html',
  styleUrls: ['./showpayment.component.css']
})
export class ShowpaymentComponent implements OnInit {

  constructor(private ps: PaymentService) {
    this.onLoading();
   }

  payment : any ;

  ngOnInit(): void {
  }

  onLoading() {
    try {
      this.ps.getPayment().subscribe(
        data => {
          this.payment = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }

}
