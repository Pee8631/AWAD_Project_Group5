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
   previewLoaded: boolean = false;
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

  deletepaymentt(id: number) {
    try {
      this.ps.deletepayment(id).subscribe(
        data => {
          console.log(data);
          this.onLoading();
          this.resetForm();
        },
        err => {
          console.log(err);

        });
    } catch (error) {
      console.log(error);
    }
  }

  
  resetForm() {
    this.previewLoaded = false;
  }

}
