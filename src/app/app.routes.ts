import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { InscriptionChoixComponent } from './components/inscription/inscription-choix/inscription-choix.component';
import { ContributeurComponent } from './components/inscription/contributeur/contributeur.component';
import { GestionnaireComponent } from './components/inscription/gestionnaire/gestionnaire.component';
import { IdeeProjetComponent } from './components/inscription/idee-projet/idee-projet.component';
import { InscriptionIndexComponent } from './components/inscription/inscription-index/inscription-index.component';

export const routes: Routes = [

  {path: 'login',component:LoginComponent},
  {path: 'inscription',component:InscriptionComponent,children:[
    {path:'', component:InscriptionIndexComponent},
    {path:'choix', component:InscriptionChoixComponent},
    {path:'contributeur', component:ContributeurComponent},
    {path:'gestionnaire', component:GestionnaireComponent},
    {path:'idee_de_projet', component:IdeeProjetComponent},
    {path:'**', redirectTo: ''},
  ] },


];
