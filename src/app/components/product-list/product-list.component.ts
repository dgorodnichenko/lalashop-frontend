import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;
  searchMode: boolean = false;
  count: number = 1;

  constructor(private productListService: ProductListService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode) {
      this.searchProducts();
    } else {
      this.getProductsByCategory();
    }
  }

  getAllProducts() {
    this.productListService.getAllProducts()
      .subscribe(data => {
          this.products = data;
      });
  }

  getProductsByCategory() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

      this.productListService.getProductsByCategory(this.currentCategoryId)
      .subscribe(data => {
          this.products = data;
      });
    } else {
      this.getAllProducts();
    }
  }

  searchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.productListService.getProductsByName(theKeyword)
      .subscribe(data => {
        this.products = data;
    })
  }

}
