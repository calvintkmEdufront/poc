//Selectors
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Owner, OwnersState, emptyOwner } from './model';

const ownersFeatureState = createFeatureSelector<OwnersState>('owners');
//generic selectors

export const getOwners = createSelector(ownersFeatureState, (state) => {
  return state.owners;
});

export const getActiveIndex = createSelector(ownersFeatureState, (state) => {
  return state.activeOwnerIndex;
});

//combination selectors

export const getActiveOwner = createSelector(
  ownersFeatureState,
  getActiveIndex,
  (state, activeIndex) => {
    let isGetNewOwner = Number.isNaN(activeIndex);
    if (isGetNewOwner) {
      return emptyOwner;
    } else {
      return state.owners.find((owner) => owner.id === activeIndex);
    }
  }
);
