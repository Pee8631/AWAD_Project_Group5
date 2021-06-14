import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  addressForm = new FormGroup({
    address: new FormControl('',[Validators.required]),
    postal: new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
  }

  resetForm(){
    this.addressForm.reset();
    //this.previewLoaded = false;
  }
}
