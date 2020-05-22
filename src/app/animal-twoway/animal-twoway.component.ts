import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-twoway',
  templateUrl: './animal-twoway.component.html',
  styleUrls: ['./animal-twoway.component.css']
})
export class AnimalTwowayComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  dogbreadname: string = 'doberman';
  constructor() { }

  ngOnInit() {
  }

}
