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
import { Owner, emptyOwner } from '../../../shared-owners/ngrx/model';

@Component({
  selector: 'poc-owner-single-view',
  templateUrl: './owner-single-view.component.html',
  styleUrls: ['./owner-single-view.component.scss'],
})
export class OwnerSingleViewComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {}
  _activeOwner;

  @Input('owners') owners = [];
  @Output('poc-close') onClose = new EventEmitter();
  @Output('poc-delete') onDelete = new EventEmitter();
  @Output('poc-update') onUpdate = new EventEmitter();
  @Output('poc-create') onCreate = new EventEmitter();
  @Input('activeOwner') set activeOwner(owner: Owner) {
    if (owner) {
      this.setElActive();
      this.isNewOwner = JSON.stringify(emptyOwner) == JSON.stringify(owner);
      this.initForm(owner);
    } else {
      this.setElInActive();
    }
    this._activeOwner = owner;
  }
  get activeOwner() {
    return this._activeOwner;
  }
  ownerForm: FormGroup;
  isNewOwner = false;
  ngOnInit(): void {
    this.initForm(emptyOwner);
    // this.activeProduct.productName
  }
  initForm(owner: Owner) {
    this.ownerForm = this.formBuilder.group({
      age: [owner.age, Validators.required],
      name: [owner.name, [Validators.required]],
      gender: [owner.gender, Validators.required],
      company: [owner.company, Validators.required],
      email: [owner.email, Validators.required],
      phone: [owner.phone, Validators.required],
      address: [owner.address, Validators.required],
      about: [owner.about, Validators.required],
      favoritefruit: [owner.favoriteFruit, Validators.required],
    });
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
    this.onDelete.emit(this.activeOwner);
  }

  getFormValues() {
    let owner: Owner = { ...this.activeOwner };
    owner.age = this.ownerForm.controls.age.value;
    owner.name = this.ownerForm.controls.name.value;
    owner.gender = this.ownerForm.controls.gender.value;
    owner.company = this.ownerForm.controls.company.value;
    owner.email = this.ownerForm.controls.email.value;
    owner.phone = this.ownerForm.controls.phone.value;
    owner.address = this.ownerForm.controls.address.value;
    owner.about = this.ownerForm.controls.about.value;
    owner.favoriteFruit = this.ownerForm.controls.favoritefruit.value;
    return owner;
  }
  updateCurrent() {
    let owner: Owner = this.getFormValues();
    owner = { ...this.activeOwner, ...owner };
    this.onUpdate.emit(owner);
  }

  create() {
    let owner: Owner = this.getFormValues();
    this.onCreate.emit(owner);
  }
}
