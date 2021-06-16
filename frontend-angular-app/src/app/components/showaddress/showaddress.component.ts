import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-showaddress',
  templateUrl: './showaddress.component.html',
  styleUrls: ['./showaddress.component.css']
})
export class ShowaddressComponent implements OnInit {

  address : any
  previewLoaded: boolean = false;

  constructor(private as : AddressService) {
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading() {
    try {
      this.as.getAddress().subscribe(
        data => {
          this.address = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }

}
