import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'demo-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: string[] = [];
  constructor(private carService: CarsService) { }

  async ngOnInit() {
    this.cars = await this.carService.getCars();
  }

}
