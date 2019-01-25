import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarsComponent} from './cars.component';
import {ListComponent} from '../list/list.component';
import {CarsService} from '../services/cars.service';
import {FormsModule} from '@angular/forms';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CarsComponent, ListComponent],
      providers: [CarsService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find exactly one car', () => {
    component.cars = ['Honda'];
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.list-item');
    expect(items.length).toBe(1);
  });


  it('should receive 2 cars from service', async () => {
    // We need to manually call component life cycle hooks
    await component.ngOnInit();
    fixture.detectChanges();
    const cars = component.cars;
    expect(cars.length).toBe(2);
  });

  it('adding a new car from form should update available cars in the component', async () => {
    await component.ngOnInit();
    const initialCars = component.cars.length;
    component.car = 'dummy car';
    component.addCar();
    expect(component.cars.length).toEqual(initialCars + 1);
  });

  it('calling #addCar() should not affect available cars when car input is empty', async () => {
    await component.ngOnInit();
    const initialCars = component.cars;
    component.addCar();
    expect(initialCars).toBe(component.cars);
    expect(initialCars.length).toEqual(component.cars.length);
  });
});
