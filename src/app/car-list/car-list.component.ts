import { Car } from './../data/mock-cars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  Cars = Car;
  routerlink: string;
  descriptions: string;
  brandname: string;
  loadComponent: boolean;

  constructor() {
   }

  ngOnInit() {
  }
  sendValues(descriptions: string) {
    this.descriptions = descriptions;
    this.loadComponent = true;
  }

}
