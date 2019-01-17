import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars = ['Fiat', 'Mazda'];
  constructor() { }
  getCars() {
    return of(this.cars).toPromise();
  }
}
