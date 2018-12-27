import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import { ListComponent } from '../list/list.component';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let totalCars:number;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent ,ListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    totalCars = component.cars.length;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find exactly one car',()=>{
    let copy = component.cars.slice();
    component.cars = ["Honda"];
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.list-item');
    expect(items.length).toBe(1);
  })

  it(`should find all car items`,()=>{
    const items = fixture.nativeElement.querySelectorAll('.list-item');
    expect(items.length).toEqual(component.cars.length);
  });

  
});
