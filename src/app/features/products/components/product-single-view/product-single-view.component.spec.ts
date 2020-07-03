import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleViewComponent } from './product-single-view.component';

describe('ProductSingleViewComponent', () => {
  let component: ProductSingleViewComponent;
  let fixture: ComponentFixture<ProductSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
