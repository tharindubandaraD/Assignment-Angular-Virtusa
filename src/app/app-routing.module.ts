import { CarDetailsComponent } from './car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';
import { RegisterComponent } from './register/register.component';
import { AnimalTwowayComponent } from './animal-twoway/animal-twoway.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'animaldetail', component : AnimalDetailsComponent},
  { path: 'animaltwoway', component: AnimalTwowayComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'carlist', component: CarListComponent},
  { path: 'cardetails', component: CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AnimalDetailsComponent, AnimalTwowayComponent, RegisterComponent, CarListComponent, CarDetailsComponent];
