import { Component, OnInit } from '@angular/core';
import { OwnersState } from '../../../shared-owners/ngrx/model';
import { Store } from '@ngrx/store';
import { Owner } from '../../../shared-owners/ngrx/model';
import * as action from '../../../shared-owners/ngrx/owners.actions';
import * as selectors from '../../../shared-owners/ngrx/owners.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-owners-shell',
  templateUrl: './owners-shell.component.html',
  styleUrls: ['./owners-shell.component.scss'],
})
export class OwnersShellComponent implements OnInit {
  constructor(private store: Store<OwnersState>) {}
  activeOwner$: Observable<Owner>;
  owners$: Observable<Owner[]>;
  ngOnInit(): void {
    // this.store.dispatch(action.loadOwners());
    this.owners$ = this.store.select(selectors.getOwners);
    this.activeOwner$ = this.store.select(selectors.getActiveOwner);
  }

  setActiveOwnerId(owner: Owner) {
    let id = owner.id;
    this.store.dispatch(action.setActiveOwner({ id }));
  }

  updateStoreWithNewOwner(owner) {}
  resetOwnerId() {
    let id = null;
    this.store.dispatch(action.setActiveOwner({ id }));
  }
  deleteOwner(owner: Owner) {
    this.resetOwnerId();
    let id = owner.id;
    this.store.dispatch(action.deleteOwner({ id }));
  }
  udpateOwner(owner: Owner) {
    this.store.dispatch(action.updateOwner({ owner }));
  }
}
