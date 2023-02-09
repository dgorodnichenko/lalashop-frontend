import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartItems();
  }

  listCartItems() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalQuantity.subscribe(data => {
      this.totalQuantity = data;
    });

    this.cartService.totalPrice.subscribe(data => {
      this.totalPrice = data;
    });

    this.cartService.countCartTotal();
  }

  increaseQuantity(theCartItem: CartItem) {
    this.cartService.addItemToCart(theCartItem);
  }

  decreaseQuantity(theCartItem: CartItem) {
    this.cartService.decreaseQuantity(theCartItem);
  }

}
