import { Component } from '@angular/core';
import { car } from './car'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
   
  
  styles: []
})
export class AppComponent {
  
  
  constructor(private router:Router){}
  navigatetoabout(){
    this.router.navigate(['/car']);
  }
  
  
  
  
  cars = [
    new car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/bmwm3'),
    new car('car2', 2017, 'acura', 'nsx', 'https://en.wikipedia.org/wiki/hondansx'),
    new car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/chevroletcamaro')
  ];

  showCar(car: car) {
    const desc = car.make;
    if (window.confirm('Click "OK" to be redirected to ' + car.article)) {
      window.location.href = car.article;
    }
  }
}
