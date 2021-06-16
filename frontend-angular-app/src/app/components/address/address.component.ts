import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private ad: AddressService) { }

  addressForm = new FormGroup({
    address: new FormControl('',[Validators.required]),
    subdistrict: new FormControl('',[Validators.required]),
    district: new FormControl('',[Validators.required]),
    province: new FormControl('',[Validators.required]),
    postal: new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
  }

  addAddress(){
    this.ad.addAddress(this.addressForm.value).subscribe(
      data => {
        console.log(data)
        alert('successfully');
        this.addressForm.reset();
      },
      err =>{
        console.log(err);
      });
  }

  resetForm(){
    this.addressForm.reset();
    //this.previewLoaded = false;
  }
}
