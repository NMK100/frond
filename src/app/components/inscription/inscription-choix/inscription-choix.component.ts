import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Users } from '../../../models/users';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-inscription-choix',
  imports: [RouterLink],
  templateUrl: './inscription-choix.component.html',
  styleUrl: './inscription-choix.component.css'
})
export class InscriptionChoixComponent implements OnInit {
  user!: Users; // Pour stocker les données de l'utilisateur si nécessaire
  constructor(private route:Router,private rt:ActivatedRoute, private data:DataService){}
  ngOnInit() {
    // this.rt.params.subscribe(params => {
    //   const user = params['user'];
    //   if (user) {
    //     console.log("Utilisateur reçu: ", user);
    //     this.user = user;
    //   } else {
    //     console.error("Aucun utilisateur trouvé dans les paramètres.");
    //   }
    // });
    if (!this.data.userData) {
      console.error("Aucune donnée utilisateur trouvée dans le service.");
      this.route.navigate(['inscription']);
    } else {
      this.user = this.data.userData; // Récupérer les données de l'utilisateur depuis le service
    }
  }
  choix(ch:string){
    switch(ch){
      case "IDEE":
        return this.route.navigate(['inscription/porteur_de_projet']);
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
