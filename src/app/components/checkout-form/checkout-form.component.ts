import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/common/city';
import { Country } from 'src/app/common/country';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  checkoutForm: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardMonths: number[] = [];
  creditCardYears: number[] = [];

  countries: Country[] = [];
  cities: City[] = [];

  constructor(private formBuilder: FormBuilder,
              private formService: FormService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = this.createCheckoutForm();
    this.getCountries();
    this.getCreditCardYears();
    this.getTotalQuantity();
    this.getTotalPrice();
  }

  createCheckoutForm(): FormGroup {
    return this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('',
                                  [Validators.required]),
        lastName: new FormControl('',
                                  [Validators.required]),
        email: new FormControl('', 
                                  [Validators.required, 
                                  Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$')]),
        country: new FormControl('',
                                  [Validators.required]),
        city: new FormControl('',
                                  [Validators.required]),
        address: new FormControl('',
                                  [Validators.required]),
        zipCode: new FormControl('',
                                  [Validators.required])
      }),

      payment: this.formBuilder.group({
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
        expirationMonth: new FormControl('', [Validators.required]),
        expirationYear: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')])
      })
    });
  }

  getCountries() {
    this.formService.getAllCountries().subscribe(
      data => {
        this.countries = data;
      }
    )
  }

  getCities(formGroupName: string) {

    const formGroup = this.checkoutForm.get(formGroupName);
    const countryCode = formGroup.value.country.code;

    this.formService.getCitiesByCountryCode(countryCode).subscribe(
      data => {
        this.cities = data;
        formGroup.get('city').setValue(data[0]);
      }
    )
  }

  getCreditCardYears() {
      this.formService.getCreditCardYears().subscribe(data => {
        this.creditCardYears = data;
      }
    )
  }

  getTotalQuantity() {
    this.cartService.totalQuantity.subscribe(data => {
        this.totalQuantity = data;
      }
    )
  }

  getTotalPrice() {
    this.cartService.totalPrice.subscribe(data => {
        this.totalPrice = data;
      }
    )
  }

  onSubmit() {
    if(this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    let order = new Order();
      order.totalPrice = this.totalPrice;
      order.totalQuantity = this.totalQuantity;

      const cartItems = this.cartService.cartItems;

      let orderItems: OrderItem[] = cartItems.map(cartItem => new OrderItem(cartItem));

      let purchase = new Purchase()

      purchase.customer = this.checkoutForm.controls['customer'].value;
      const country: Country = JSON.parse(JSON.stringify(purchase.customer.country));
      const city: City = JSON.parse(JSON.stringify(purchase.customer.city));
      purchase.customer.country = country.name;
      purchase.customer.city = city.name;

      purchase.order = order;
      purchase.orderItems = orderItems;

      this.checkoutService.saveOrder(purchase).subscribe(
        {
          next: response => {
            alert(`Ваше замовлення отримано. Номер вашого замовлення: ${response.orderTrackingNumber}`);
            this.resetOrder();
          },
          error: err => {
            alert(`Сталася помилка при замолвленні`);
          }
        }
      )
  }

  resetOrder() {
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

    this.checkoutForm.reset();

    this.router.navigateByUrl("/products");
  }

  handleMonthsAndYears() {
    const formGroup = this.checkoutForm.get('payment');

    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(formGroup.value.expirationYear);

    let startMonth: number;

    if(currentYear === selectedYear) {
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }

    this.formService.getCreditCardMonth(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    );
  }


  get firstName() {
    return this.checkoutForm.get('customer.firstName');
  }

  get lastName() {
    return this.checkoutForm.get('customer.lastName');
  }

  get email() {
    return this.checkoutForm.get('customer.email');
  }

  get country() {
    return this.checkoutForm.get('customer.country');
  }

  get city() {
    return this.checkoutForm.get('customer.city');
  }

  get address() {
    return this.checkoutForm.get('customer.address');
  }

  get zipCode() {
    return this.checkoutForm.get('customer.zipCode');
  }

  get cardNumber() {
    return this.checkoutForm.get('payment.cardNumber');
  }

  get expirationMonth() {
    return this.checkoutForm.get('payment.expirationMonth');
  }

  get expirationYear() {
    return this.checkoutForm.get('payment.expirationYear');
  }

  get cvv() {
    return this.checkoutForm.get('payment.cvv');
  }
}
