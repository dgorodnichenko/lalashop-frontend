import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { CartService } from 'src/app/services/cart.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalQuantity: number = 0;
  currentUser: User;

  constructor(private cartService: CartService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalQuantity.subscribe(data => {
      this.totalQuantity = data;
      this.getCurrentUser();
    });
  }

  getCurrentUser() {
    this.currentUser = this.tokenStorageService.getUser();
   }
 
   logOut() {
     this.tokenStorageService.logOut();
   }

}
