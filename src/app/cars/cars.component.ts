import {Component, OnInit} from '@angular/core';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'demo-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: string[] = [];
  car: string;

  constructor(private carService: CarsService) {
  }

  async ngOnInit() {
    this.carService.getCars()
      .subscribe(data => {
        this.cars = data;
      });
  }

  addCar() {
    if (this.car) {
      this.carService.addCar(this.car);
      this.car = '';
    }
  }

}
