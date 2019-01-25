import {TestBed} from '@angular/core/testing';

import {
  CarsService
} from './cars.service';

describe('CarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });

  it('should return an array with 2 cars', () => {
    const service = new CarsService();
    service.getCars()
      .subscribe(cars => {
        expect(cars.length).toBe(2);
      });
  });

  it('should return ["Fiat","Mazda"] on first call', () => {
    const service = new CarsService();
    const expected = ['Fiat', 'Mazda'];
    // const actual = await service.getCars();
    service.getCars().subscribe(actual => {
      expect(actual).toEqual(expected);
    });
  });

  it('adding a new car should cause sync of data between consumers of service', () => {
    const service = new CarsService();
    let cars = [];
    service.getCars().subscribe(data => {
      cars = data;
    });
    service.addCar('car');
    expect(cars.length).toEqual(3);
  });
});
