import { Component, OnInit } from '@angular/core';
import { MainProductCategory } from 'src/app/common/main-product-category';
import { SubproductCategory } from 'src/app/common/subproduct-category';
import { MainProductCategoryService } from 'src/app/services/main-product-category.service';
import { SubproductCategoryService } from 'src/app/services/subproduct-category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mainProductCategories: MainProductCategory[];
  subProductCategories: SubproductCategory[];

  constructor(private mainProductCategorySevice: MainProductCategoryService,
              private subProductCategoryService: SubproductCategoryService) { }

  ngOnInit(): void {
    this.getAllMainCategories();
    this.getAllSubCategories();
  }

  getAllMainCategories() {
    this.mainProductCategorySevice.getAllMainCategories()
      .subscribe(data => {
        this.mainProductCategories = data;
      });
  }

  getAllSubCategories() {
    this.subProductCategoryService.getAllSubcategories()
      .subscribe(data => {
        this.subProductCategories = data;
      })
  }

}
