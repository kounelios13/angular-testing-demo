import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import { ListComponent } from '../list/list.component';
import {CarsService} from '../services/cars.service';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let totalCars: number;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent , ListComponent],
      providers:[CarsService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    totalCars = component.cars.length;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find exactly one car', () => {
    component.cars = ['Honda'];
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.list-item');
    expect(items.length).toBe(1);
  });

  it(`should find all car items`, () => {
    const items = fixture.nativeElement.querySelectorAll('.list-item');
    expect(items.length).toEqual(component.cars.length);
  });


  it('should receive 2 cars from service',()=>{
    const {cars} = component;
    expect(cars.length).toBe(2);
  });
});
