import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private ad: AddressService, private router: Router) { }

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
    if(this.addressForm.value.address != "" && this.addressForm.value.subdistrict != "" && this.addressForm.value.district != "" 
    && this.addressForm.value.province != "" && this.addressForm.value.postal != ""){
      this.ad.addAddress(this.addressForm.value).subscribe(
        data => {
          console.log(data)
          alert('เพิ่มที่อยู่เรียบร้อยแล้ว');
          this.addressForm.reset();
          this.router.navigate(['/payment'])
        },
        err =>{
          console.log(err);
        });
    }
    else{
      alert('กรุณาใส่ข้อมูลให้ครบทุกช่อง');
    }
      
  }

  resetForm(){
    this.addressForm.reset();
    //this.previewLoaded = false;
  }
}
