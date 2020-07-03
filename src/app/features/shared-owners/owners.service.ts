import { Injectable } from '@angular/core';
import { sampleOwnerList } from './ngrx/owner-data';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OwnersService {
  constructor() {}

  mockLoadOwnerApiCall() {
    return of(sampleOwnerList);
  }
}
