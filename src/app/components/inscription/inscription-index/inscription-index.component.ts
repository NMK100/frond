import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-inscription-index',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './inscription-index.component.html',
  styleUrl: './inscription-index.component.css'
})
export class InscriptionIndexComponent {

  erreur: string | undefined;
  formContenu:FormGroup;

  constructor(private fb:FormBuilder, private route:Router) {
    // Pour initialisation du formulaire
    this.formContenu = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      sexe: ['H', [Validators.required]],
    });

   }

  goToSuivant() {
      if (this.formContenu.valid) {
        this.route.navigate(['inscription/choix']);
      } else {
        this.erreur = "Veuillez remplir tous les champs correctement.";
        setTimeout(() => {
          this.erreur = undefined;
        }, 3000);
      }
  }

}
