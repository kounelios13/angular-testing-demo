import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  links = [{link: '/home', label: 'Home'}, {link: '/cars', label: 'Cars'}];
  navBarColor = '#f44336';
  linkColor = '#000000';
}
