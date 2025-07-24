import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Note } from '../models/note';
import { NoteService } from '../service/note';
import { Route } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-note-form',
  imports: [FormsModule, CommonModule,],  
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm  {
@Input() noteAEditer?: Note;

  titre: string = '';
  contenu: string = '';
  couleur: string = '#ffffff';
  rappelleDate: Date |null = null;
  collaborateur: string[] = []; 

constructor(private noteService: NoteService,     private route: ActivatedRoute,
    private router: Router
) { }


  gererSoumission(formulaire: NgForm) {
    const nouvelleNote= {   
      titre: this.titre,
      contenu: this.contenu,
      couleur: this.couleur,        
      rappelleDate: this.rappelleDate,  
      colaborateur: [] 
    };
    this.noteService.createNote (nouvelleNote);
    this.router.navigate(['/notes']);

  }

  
  toggleEpingler() {
    if (this.noteAEditer) {
      //this.noteAEditer.epingler = !this.noteAEditer.epingler;
    }
  }

  



  onContenuChange(value: string) {
    this.contenu = value;
  }

   

showRappel = false;
inputDate = '';
today = new Date().toISOString().slice(0, 16); // Format "YYYY-MM-DDTHH:MM"

// Afficher/masquer le sélecteur
toggleRappel() {
  if (this.rappelleDate) {
    this.rappelleDate = null; // Supprimer le rappel existant
  } else {
    this.showRappel = true; // Afficher le sélecteur
    this.inputDate = this.today; // Date actuelle par défaut
  }
}

// Valider le rappel
validerRappel() {
  console.log('Rappel validé pour :', this.inputDate);
  if (this.inputDate) {
    this.rappelleDate = new Date(this.inputDate);
    this.showRappel = false; // Masquer le sélecteur
    console.log('Rappel programmé pour :', this.rappelleDate);}
}

  ajouterCollaborateur(): void {
    const email = prompt('Entrez l\'adresse e-mail du collaborateur :');
    if (email && email.trim() !== '') {
      // Simple validation d'email (peut être améliorée)
      if (email.includes('@') && email.includes('.')) {
        if (!this.collaborateur.includes(email)) { // Évite les doublons
          this.collaborateur.push(email);
          console.log('Collaborateur ajouté :', email);
          alert(`Collaborateur ${email} ajouté !`);
        } else {
          alert('Cet e-mail est déjà un collaborateur.');
        }
      } else {
        alert('Adresse e-mail invalide.');
      }
    } else {
      alert('Opération annulée.');
    }
    
  }
}