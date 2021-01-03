import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { GestionUniversiteComponent } from './components/gestion-universite/gestion-universite.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  
  {
    path:"dashbord",
    component:DashbordComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
 
 
  {
    path:"formulaire",
    component:FormulaireComponent
  },
 
   
  {
    path:"gestion-universite",
    component:GestionUniversiteComponent
  },
 
  

 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
