import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private data = ['Fiat', 'Mazda'];
  private carsSubject = new BehaviorSubject(this.data);
  private $cars = this.carsSubject.asObservable();

  constructor() {
  }

  getCars() {
    return this.$cars;
  }

  addCar(car) {
    this.data.push(car);
  }
}
