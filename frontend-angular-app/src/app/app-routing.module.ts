import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { SigninComponent } from './components/signin/signin.component' ;
import { SignupComponent } from './components/signup/signup.component' ;
import { ProductsComponent } from './components/products/products.component' ;
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component' ;
import { CartComponent } from './components/cart/cart.component' ;
import { PaymentComponent } from './components/payment/payment.component' ;
import { StatusproductsComponent } from './components/statusproducts/statusproducts.component';
import { ProfileComponent } from './components/profile/profile.component' ;


const routes: Routes = [
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'products', component: ProductsComponent},
  {path:'addproducts', component: AddproductsComponent},
  {path:'cart', component: CartComponent},
  {path:'payments', component: PaymentComponent},
  {path:'statusproducts', component: StatusproductsComponent},
  {path:'profile', component: ProfileComponent},
  {path:'address', component: AddressComponent},
  {path:'showproducts', component: ShowproductsComponent},
  {path:'',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
