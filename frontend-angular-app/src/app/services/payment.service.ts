import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment:any;

  constructor(private http: HttpClient) { }

  addPayment(payment: any){
    return this.http.post<any>('http://localhost:3000/api/payment/add', payment)
      .pipe(map(data => {
        return data;
      }));
  }

  getPayment(){
    return this.http.get<any>('http://localhost:3000/api/payment/get')
      .pipe(map(data => {
        if (data) {
          this.payment = data;
          console.log(this.payment);
        }
        return this.payment;
      }));
  }

  
  deletepayment(id: number){
    console.log(id)
    return this.http.delete<any>('http://localhost:3000/api/payment/delete/' + id)
      .pipe(map(data => {
        return data;
        
      }));
  }
}
