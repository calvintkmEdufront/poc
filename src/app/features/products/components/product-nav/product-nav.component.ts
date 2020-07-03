import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'poc-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.scss'],
})
export class ProductNavComponent implements OnInit {
  constructor() {}
  @Input('searchTerm') searchTerm = '';
  @ViewChild('sortEl') sortEl: ElementRef;
  @Input('activeSortOption') activeSortOption = '';
  @Input('sortOptions') sortOptions = '';
  @Output('poc-sort-change') onPocSortChange = new EventEmitter();

  @ViewChild('inputEl') inputEl: ElementRef;
  @Output('poc-search-change') onPocSearchChange = new EventEmitter();
  @Output('poc-create') onPocCreate = new EventEmitter();

  ngOnInit(): void {
    console.log('init nav');
  }

  updateSort() {
    // console.log(this.sortEl.nativeElement.value);
    this.onPocSortChange.emit(this.sortEl.nativeElement.value);
  }

  updateSearch() {
    // console.log('update search');
    // console.log(this.inputEl.nativeElement.value);
    this.onPocSearchChange.emit(this.inputEl.nativeElement.value);
  }
  createNewProduct() {
    this.onPocCreate.emit();
  }
}
