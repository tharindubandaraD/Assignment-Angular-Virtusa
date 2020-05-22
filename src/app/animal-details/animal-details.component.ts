import { Animals } from '../data/mock-animals';
import { Component, OnInit } from '@angular/core';

type NewType = boolean;

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animals = Animals;
  selectedAnimal: any;
  selectedAnimalSrc: string;
  selectedAnimalDetails: string;
  selectedAnimalName: string;
  selectedDay: string ;
  selected: NewType = false;

  ngOnInit() {
  }

  selectChangeHandler(event: any) {

    this.selected = true;
    // tslint:disable-next-line: triple-equals
    if (event.target.value == 'Select value--') {
      this.selected = false;
    } else {
      this.selectedAnimal = this.animals.find(x => x.name === event.target.value);
      this.selectedAnimalSrc = this.selectedAnimal.src;
      this.selectedAnimalDetails  = this.selectedAnimal.details;
      this.selectedAnimalName  = this.selectedAnimal.name;
    }
  }

}
