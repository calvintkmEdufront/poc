import { createReducer, on, State } from '@ngrx/store';
import * as fromActions from './owners.actions';
import { Owner, OwnersState } from './model';

const initialState: OwnersState = {
  owners: [],
  activeOwnerIndex: null,
};

export const ownerReducer = createReducer(
  initialState,
  on(
    fromActions.loadOwnersSuccess,
    (state, action): OwnersState => {
      let owners = action.owners;
      return { ...state, owners };
    }
  ),
  on(
    fromActions.updateOwner,
    (state, action): OwnersState => {
      let newowner = { ...action.owner };
      console.log(newowner);
      let owners: Owner[] = state.owners.map((owner) => {
        if (owner.id === newowner.id) {
          return newowner;
        } else {
          return owner;
        }
      });
      console.log(owners);
      return { ...state, owners };
    }
  ),
  on(
    fromActions.createOwner,
    (state, action): OwnersState => {
      let owners: Owner[] = state.owners;
      let largestCurrentId = owners
        .map((owner) => owner.id)
        .reduce((a, b) => (a > b ? a : b));
      let newOwner = action.owner;
      newOwner.id = largestCurrentId + 1;
      owners = [...owners, newOwner];
      return { ...state, owners };
    }
  ),
  on(
    fromActions.deleteOwner,
    (state, action): OwnersState => {
      let id = action.id;
      let owners = state.owners.filter((owner) => owner.id !== id);
      // console.log(owners);
      return { ...state, owners };
    }
  ),
  on(
    fromActions.setActiveOwner,
    (state, action): OwnersState => {
      let activeOwnerIndex = action.id;

      return { ...state, activeOwnerIndex };
    }
  )
);

//   export function reducer(state: OwnersState | undefined, action: Action) {
//     return productsReducer(state, action);
//   }
