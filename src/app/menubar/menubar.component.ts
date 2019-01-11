import {Component, Input, OnInit} from '@angular/core';

export interface MenuBarItem {
  link: string;
  label: string;
}

@Component({
  selector: 'demo-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input()
  items: MenuBarItem[];
  constructor() { }

  ngOnInit() {
  }

}
