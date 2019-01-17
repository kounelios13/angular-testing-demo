import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  items: string[];
  @Input()
  visible = true;
  @Input()
  highlighted = false;
  constructor() { }

  ngOnInit() {
  }

}
