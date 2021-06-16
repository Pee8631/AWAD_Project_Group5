import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  productType: string[] = ['CPU','RAM','HDD','Mainboad'];

  productForm = new FormGroup({
    type: new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    file: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required]),
  });

  previewLoaded: boolean = false;
  
  products: any;

  constructor(private ps : ProductService ,private router: Router) {
    
   }

  ngOnInit(): void {
  }



  addProduct(){
    if (this.productForm.value.type != "" && this.productForm.value.name != "" && this.productForm.value.id != "" 
    && this.productForm.value.name != "" && this.productForm.value.detail != "" && this.productForm.value.quantity != "" 
    && this.productForm.value.price != "" && this.productForm.value.img != ""){
      this.ps.addProduct(this.productForm.value).subscribe(
        data => {
          console.log(data)
          alert('เพิ่มสินค้าเรียบร้อยแล้ว');
          this.productForm.reset();
        },
        err =>{
          console.log(err);
        });
    }
    else{
      alert('กรุณาใส่ข้อมูลให้ครบทุกช่อง');
    }
  }

  onChangeImg(e:any){
    if(e.target.files.length > 0){
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if(!file.type.match(pattern)) {
        alert('invalid format');
        this.productForm.reset();
      }else{
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

  updateProduct(id : number,body : []){
    try {
    this.ps.putProducts(id ,body).subscribe(
      data => {
        console.log(data);
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
    this.productForm.reset();
    this.previewLoaded = false;
  }

  showproduct(){
    this.router.navigate(['/showproducts'])
  }

}
