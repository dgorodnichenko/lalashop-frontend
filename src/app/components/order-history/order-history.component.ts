import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistory: OrderHistory[] = [];
  currentUser: string;

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    this.currentUser = sessionStorage.getItem("email");

    this.orderHistoryService.getOrderHistory(this.currentUser).subscribe(data => {
      this.orderHistory = data;
    });
  }
}
