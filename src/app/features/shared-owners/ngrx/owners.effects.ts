import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ownersActions from './owners.actions';
import { mergeMap, map } from 'rxjs/operators';
import { OwnersService } from '../owners.service';

@Injectable()
export class OwnerEffect {
  constructor(
    private actions$: Actions,
    private ownersService: OwnersService
  ) {}

  loadOwners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ownersActions.loadOwners),
      mergeMap(() =>
        this.ownersService.mockLoadOwnerApiCall().pipe(
          map((owners) => {
            return ownersActions.loadOwnersSuccess({ owners });
          })
        )
      )
    );
  });
}
