import { TestBed } from '@angular/core/testing';

import {
  CarsService
} from './cars.service';

describe('CarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });

  it('should return an array with 2 cars', async() => {
    const service = new CarsService();
    const cars = await service.getCars();
    expect(cars.length).toBe(2);
  });

  it('should return ["Fiat","Mazda"] on first call', async() => {
    const service = new CarsService();
    const expected = ['Fiat', 'Mazda'];
    const actual = await service.getCars();
    expect(actual).toEqual(expected);
  });
});
