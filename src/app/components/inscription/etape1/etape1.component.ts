import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-etape1',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './etape1.component.html',
  styleUrl: './etape1.component.css'
})
export class Etape1Component {
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
        this.route.navigate(['inscription/etape2']);
      } else {
        this.erreur = "Veuillez remplir tous les champs correctement.";
        setTimeout(() => {
          this.erreur = undefined;
        }, 3000);
      }
  }

  // Additional methods and properties can be added here as needed

}
