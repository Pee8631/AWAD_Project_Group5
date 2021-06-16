import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  products: any
  previewLoaded: boolean = false;

  constructor(private ps : ProductService) {
    this.onLoading();
  }

  ngOnInit(): void { }

  onLoading(){
    try {
      this.ps.getProducts().subscribe(
        data => {
          this.products = data;
        },
        err => {
          console.log(err)
        });
    }catch (error) {
      console.log(error)
    }
  }

  deleteProduct(id : number){
    try {
    this.ps.deleteProducts(id).subscribe(
      data => {
        console.log(data);
        this.onLoading();
        this.resetForm();
      },
      err =>{
        console.log(err);

      });
    }catch (error) {
      console.log(error);
    }
  }

  resetForm(){
    this.previewLoaded = false;
  }

}
