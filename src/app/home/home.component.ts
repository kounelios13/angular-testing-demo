import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDevices: string[];
  labDevices: string[];
  constructor() { }

  ngOnInit() {
    this.homeDevices  = ['Laptop', 'Smartphone'];
    this.labDevices = ['Desktop', 'Server', 'Dell monitor'];
  }

}
