import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, emptyProduct } from '../../ngrx/model';

@Component({
  selector: 'poc-product-single-view',
  templateUrl: './product-single-view.component.html',
  styleUrls: ['./product-single-view.component.scss'],
})
export class ProductSingleViewComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {}
  _activeProduct;

  @Input('owners') owners = [];
  @Output('poc-close') onClose = new EventEmitter();
  @Output('poc-delete') onDelete = new EventEmitter();
  @Output('poc-update') onUpdate = new EventEmitter();
  @Output('poc-create') onCreate = new EventEmitter();
  @Input('activeProduct') set activeProduct(product: Product) {
    if (product) {
      this.setElActive();
      this.isNewProduct =
        JSON.stringify(emptyProduct) == JSON.stringify(product);
      this.initForm(product);
    } else {
      this.setElInActive();
    }
    this._activeProduct = product;
  }
  get activeProduct() {
    return this._activeProduct;
  }
  productForm: FormGroup;
  activeImageSeed = 0;
  isNewProduct = false;
  ngOnInit(): void {
    this.initForm(emptyProduct);
    // this.activeProduct.productName
  }
  initForm(product: Product) {
    // console.log(product);
    this.activeImageSeed = this.getSeed(product.productImage);
    this.productForm = this.formBuilder.group({
      name: [product.productName, Validators.required],
      price: [product.productPrice, [Validators.required]],
      stock: [product.productStock, Validators.required],
      owner: [product.owner, Validators.required],
      category: [product.productCategory, Validators.required],
      imageId: [this.activeImageSeed, Validators.required],
    });
  }

  getImageUrl() {
    return `https://picsum.photos/seed/${this.activeImageSeed}/200/300`;
  }
  updateImage() {
    this.activeImageSeed = this.productForm.controls.imageId.value;
    // console.log('update pls - ' + this.getImageUrl());
  }

  getSeed(imgUrl) {
    let string = imgUrl;
    string = string.substring(string.indexOf('/seed/') + 6, string.length + 1);
    string = string.replace('/200/300', '');
    string = string === '' ? 0 : string;
    // console.log(string);
    return string;
  }

  closePanel() {
    this.onClose.emit();
  }
  setElActive() {
    this.renderer.addClass(this.el.nativeElement, 'active');
  }
  setElInActive() {
    this.renderer.removeClass(this.el.nativeElement, 'active');
  }

  deleteCurrent() {
    this.onDelete.emit(this.activeProduct);
  }

  getFormValues() {
    let product: Product = { ...this.activeProduct };
    product.owner = this.productForm.controls.owner.value;
    product.productName = this.productForm.controls.name.value;
    product.productPrice = this.productForm.controls.price.value;
    product.productStock = this.productForm.controls.stock.value;
    product.productCategory = this.productForm.controls.category.value;
    product.productImage = this.getImageUrl();
    return product;
  }
  updateCurrent() {
    let product: Product = this.getFormValues();
    this.onUpdate.emit(product);
  }

  create() {
    let product: Product = this.getFormValues();
    this.onCreate.emit(product);
  }
}
