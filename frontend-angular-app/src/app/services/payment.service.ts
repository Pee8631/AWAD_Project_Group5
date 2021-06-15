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
    return this.http.post<any>('http://localhost:3000/payment/add', payment)
      .pipe(map(data => {
        return data;
      }));
  }
}
