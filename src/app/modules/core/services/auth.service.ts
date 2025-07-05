import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    // TODO: Get the value from the state
    return of(false).pipe(
      delay(100),
    )
  }
}
