import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription-choix',
  imports: [RouterLink],
  templateUrl: './inscription-choix.component.html',
  styleUrl: './inscription-choix.component.css'
})
export class InscriptionChoixComponent {
  constructor(){}
  choix(ch:string){
    switch(ch){
      case "IDEE":
        return;
      case "GESTIONNAIRE":
        return;
      case "CONTRIBUTEUR":
        return;
      default:
        console.error("Choix invalide: " + ch);
        return;

    }

  }

}
