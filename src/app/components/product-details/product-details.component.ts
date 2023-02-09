import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productListService: ProductListService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProductDetails();
    });
  }

  getProductDetails() {
    const productId: number = +this.route.snapshot.paramMap.get('id');

    this.productListService.getProductById(productId).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(theProduct: Product) {
    const cartItem = new CartItem(theProduct);
    this.cartService.addItemToCart(cartItem);
  }

}
