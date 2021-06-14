import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatusproductsComponent } from './components/statusproducts/statusproducts.component';
import { AddressComponent } from './components/address/address.component';
import { MynavbarComponent } from './components/mynavbar/mynavbar.component';
//import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    CartComponent,
    PaymentComponent,
    ProductsComponent,
    ProfileComponent,
    ShowproductsComponent,
    SigninComponent,
    SignupComponent,
    StatusproductsComponent,
    AddressComponent,
    MynavbarComponent,
//    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
