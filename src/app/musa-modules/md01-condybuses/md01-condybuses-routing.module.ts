import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Md01CondybusesComponent } from './md01-condybuses.component';


const routes: Routes = [
  {
    path: '', 
    component: Md01CondybusesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Md01CondybusesRoutingModule { }
