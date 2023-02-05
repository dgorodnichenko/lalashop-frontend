import { TestBed } from '@angular/core/testing';

import { MainProductCategoryService } from './main-product-category.service';

describe('MainProductCategoryService', () => {
  let service: MainProductCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProductCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
