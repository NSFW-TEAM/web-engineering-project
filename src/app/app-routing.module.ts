import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RandomexeComponent } from './components/randomexe/randomexe.component';
import { NutinfoComponent } from './components/nutinfo/nutinfo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'randomexe',component:RandomexeComponent},
  {path:'nutinfo',component:NutinfoComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
