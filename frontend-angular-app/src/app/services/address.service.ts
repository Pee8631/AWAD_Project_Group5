import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  address : any

  
  constructor(private http: HttpClient) { }

  addAddress(address: any){
    return this.http.post<any>('http://localhost:3000/address/add', address)
      .pipe(map(data => {
        return data;
      }));
  }

  getAddress(){
    return this.http.get<any>('http://localhost:3000/address/get')
      .pipe(map(data => {
        if (data) {
          this.address = data;
          console.log(this.address);
        }
        return this.address;
      }));
  }

}
