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
  private defaultNavbarBackground = 'rgba(0,0,0,.8) !important';
  private defaultLinkColor = 'black';
  @Input()
  items: MenuBarItem[];
  @Input()
  background: string;
  @Input()
  linkColor: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.background = this.background || this.defaultNavbarBackground;
    this.linkColor = this.linkColor || this.defaultLinkColor;
  }

  getBackgroundColor() {
    return this.background;
  }

  getGridClass() {
    const maxColumns = 12;
    const number = maxColumns / this.items.length;
    const cssClass = `ui-sm-12 ui-md-${number} ui-lg-${number} ui-xl-${number}`;
    return cssClass;
  }

  getLinkColor() {
    return this.linkColor;
  }

  /**
   * sanitize user input to prevent XSS
   * @param  style - Style to sanitize
   */
  sanitizeStyle(style: string) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
