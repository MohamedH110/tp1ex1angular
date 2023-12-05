import { Injectable } from '@angular/core';
import { car } from './car';
import { NgFor } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarService {
    cars=[ new car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/bmwm3'),
    new car('car2', 2017, 'acura', 'nsx', 'https://en.wikipedia.org/wiki/hondansx'),
    new car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/chevroletcamaro')]
  constructor() { 

  }

  rechcar(){
    
  }
  
  getlistcar(){
    
  }

}
