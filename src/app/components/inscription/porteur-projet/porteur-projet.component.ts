import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-porteur-projet',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './porteur-projet.component.html',
  styleUrl: './porteur-projet.component.css'
})
export class PorteurProjetComponent {
  conditionUtilisation: FormGroup;
  constructor(private fb:FormBuilder, private route:Router) {
    this.conditionUtilisation = this.fb.group({
      condition: [false,[Validators.requiredTrue]]
    });
  }

  valider(){
    if (this.conditionUtilisation.valid) {
      console.log("Conditions acceptées");
      // this.route.navigate(['inscription/choix']);
    } else {
      console.error("Veuillez accepter les conditions d'utilisation");
    }
  }

}
