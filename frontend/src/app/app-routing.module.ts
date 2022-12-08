import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { PlacementofficerviewComponent } from './placementofficerview/placementofficerview.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { TrainerviewComponent } from './trainerview/trainerview.component';

const routes: Routes = [ 
  {path:'',component:LoginComponent},
  {path:'placement',component:PlacementofficerviewComponent},
  {path:'trainer',component:TrainerviewComponent},
  {path:'learner',component:StudentviewComponent},
  {path:'landing',component:LandingpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
