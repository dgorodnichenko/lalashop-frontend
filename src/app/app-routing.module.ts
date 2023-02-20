import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuardService } from './helpers/auth-guard.service';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'cart', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutFormComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', component: ProductListComponent},
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
