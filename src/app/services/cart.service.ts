import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addItemToCart(cartItem: CartItem) {
    let isAlreadyInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === cartItem.id);
      isAlreadyInCart = (existingCartItem != undefined);
    }

    if(isAlreadyInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }

    this.countCartTotal();
  }

  countCartTotal() {
    let totalQuantityValue: number = 0;
    let totalPriceValue: number = 0;

    for (let cartItem of this.cartItems) {
      totalQuantityValue += cartItem.quantity;
      totalPriceValue += cartItem.quantity * cartItem.price;
    }

    this.totalQuantity.next(totalQuantityValue);
    this.totalPrice.next(totalPriceValue);
    
  }
}
