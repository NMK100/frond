import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { Etape1Component } from './components/inscription/etape1/etape1.component';
import { Etape2Component } from './components/inscription/etape2/etape2.component';
import { Etape3Component } from './components/inscription/etape3/etape3.component';
import { Etape5Component } from './components/inscription/etape5/etape5.component';
import { Etape4Component } from './components/inscription/etape4/etape4.component';

export const routes: Routes = [

  {path: 'login',component:LoginComponent},
  {path: 'inscription',component:InscriptionComponent,children:[
    {path:'', component:Etape1Component},
    {path:'etape1', component:Etape2Component},
    {path:'etape2', component:Etape3Component},
    {path:'etape3', component:Etape4Component},
    {path:'final', component:Etape5Component},
    {path:'**', redirectTo: ''},
  ] },


];
