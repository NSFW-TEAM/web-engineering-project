import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RandomexeComponent } from './components/randomexe/randomexe.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'randomexe',component:RandomexeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
