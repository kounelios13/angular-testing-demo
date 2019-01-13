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
  @Input()
  background: string;
  @Input()
  linkColor: string;
  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor() {
    return this.background || 'rgba(0,0,0,.8) !important';
  }

  getGridClass() {
    const maxColumns = 12;
    const number = maxColumns / this.items.length;
    const cssClass = `ui-g-${number}`;
    return cssClass;
  }
}
