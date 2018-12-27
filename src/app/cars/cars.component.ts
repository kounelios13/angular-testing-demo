import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:string[] = ["Mazda","Fiat"];
  constructor() { }

  ngOnInit() {
  }

}
