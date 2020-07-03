import { createAction, props } from '@ngrx/store';
import { Owner, OwnersState } from './model';

export const loadOwners = createAction('[Owners API] load Owner');
export const loadOwnersSuccess = createAction(
  `[Owners API] load Owner Success`,
  props<{ owners: Owner[] }>()
);
export const updateOwner = createAction(
  '[Owners] update owner',
  props<{ owner: Owner }>()
);

export const createOwner = createAction(
  '[Owners] create owner',
  props<{ owner: Owner }>()
);

export const deleteOwner = createAction(
  '[Owners] delete owner',
  props<{ id: number }>()
);
export const setActiveOwner = createAction(
  `[Owners] set active owner`,
  props<{ id: number }>()
);
