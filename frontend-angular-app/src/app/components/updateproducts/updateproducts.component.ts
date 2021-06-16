import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { productsType } from 'src/app/products.model';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})

export class UpdateproductsComponent implements OnInit {

  productType: string[] = ['food', 'clothing', 'medicine', 'electric equipment'];

  productForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required ,Validators.min(0)]),
    price: new FormControl('', [Validators.required ,Validators.min(0)]),
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  numid: number;
  previewLoaded: boolean = false;

  constructor(private ps: ProductService, private router: Router) {
    this.numid = this.ps.getupdateProducts();
    //this.onLoadingOnlyOne(this.numid);
  }

  ngOnInit(): void {
  }

  updateProduct() {
    if (this.productForm.value.type != "" && this.productForm.value.name != "" && this.productForm.value.id != "" 
    && this.productForm.value.name != "" && this.productForm.value.detail != "" && this.productForm.value.quantity != "" 
    && this.productForm.value.price != "" && this.productForm.value.img != "") {
      this.ps.putProducts(this.numid, this.productForm.value).subscribe(
        data => {
          console.log(data)
          alert('แก้ไขสินค้าเรียบร้อยแล้ว');
          //this.productForm.reset();
          this.router.navigate(['/showproducts']);
        },
        err => {
          console.log(err);
        });
    }
    else{
      alert('กรุณาใส่ข้อมูลให้ครบทุกช่อง')
    }
  }

  /*onLoadingOnlyOne(id : number){
    try {
      this.ps.getOneProducts(id).subscribe(
        data => {
        console.log(data);
        this.products = data;
        
      },
      err => {
        console.log(err)
      });

    }catch (error) {
      console.log(error)
    }
  }*/

  resetForm() {
    //this.onLoadingOnlyOne(this.numid);
    this.previewLoaded = false;
  }

  showproduct() {
    this.router.navigate(['/showproducts'])
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.productForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.productForm.patchValue({
            img: reader.result
          });
        }
      }
    }
  }




}
