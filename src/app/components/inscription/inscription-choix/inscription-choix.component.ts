import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription-choix',
  imports: [RouterLink],
  templateUrl: './inscription-choix.component.html',
  styleUrl: './inscription-choix.component.css'
})
export class InscriptionChoixComponent {
  constructor(private route:Router){}
  choix(ch:string){
    switch(ch){
      case "IDEE":
        return this.route.navigate(['inscription/idee_de_projet']);
      case "GESTIONNAIRE":
        return this.route.navigate(['inscription/gestionnaire']);
      case "CONTRIBUTEUR":
        return this.route.navigate(['inscription/contributeur']);
      default:
        console.error("Choix invalide: " + ch);
        return this.route.navigate(['inscription/choix']);

    }

  }

}
