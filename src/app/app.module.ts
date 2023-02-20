import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { MobileApplicationComponent } from './components/mobile-application/mobile-application.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authInterceptorProvider } from './helpers/auth-interceptor.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    SearchComponent,
    NavbarComponent,
    BannerComponent,
    MobileApplicationComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutFormComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    OrderHistoryComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
