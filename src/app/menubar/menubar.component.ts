import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.background = this.background || 'rgba(0,0,0,.8) !important';
  }

  getBackgroundColor() {
    return this.background || 'rgba(0,0,0,.8) !important';
  }

  getGridClass() {
    const maxColumns = 12;
    const number = maxColumns / this.items.length;
    const cssClass = `ui-sm-12 ui-md-${number} ui-lg-${number} ui-xl-${number}`;
    return cssClass;
  }

  getLinkColor() {
    const defaultColor = 'black';
    return this.linkColor || defaultColor;
  }

  sanitizeStyle(style){
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
