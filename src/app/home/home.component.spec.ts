import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ListComponent} from '../list/list.component';
import {Card} from 'primeng/card';
import {CarsComponent} from '../cars/cars.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ListComponent, Card, CarsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Home Devices array must have 2 items', () => {
    component.ngOnInit();
    expect(component.homeDevices.length).toBe(2);
  });

  it('Lab Devices array must have 3 items', () => {
    component.ngOnInit();
    expect(component.labDevices.length).toBe(3);
  });
});
