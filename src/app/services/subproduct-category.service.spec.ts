import { TestBed } from '@angular/core/testing';

import { SubproductCategoryService } from './subproduct-category.service';

describe('SubproductCategoryService', () => {
  let service: SubproductCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubproductCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
