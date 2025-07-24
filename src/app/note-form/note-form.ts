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
      rappelleDate: null, 
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

   toggleRappel() : void {
    if (this.rappelleDate) {
      // Si un rappel existe, le supprimer
      this.rappelleDate = null;
      console.log('Rappel supprimé !');
    } else {
      // Si aucun rappel n'existe, en demander un
      const inputDate = prompt('Entrez la date et l\'heure du rappel (AAAA-MM-JJTHH:MM, ex: 2025-07-23T10:30)');
      if (inputDate) {
        const date = new Date(inputDate);
        if (!isNaN(date.getTime())) { // Vérifie si la date est valide
          this.rappelleDate = date;
          console.log('Rappel défini pour le :', this.rappelleDate);
          alert('Rappel défini pour le : ' + this.rappelleDate.toLocaleString());
        } else {
          alert('Format de date/heure invalide. Veuillez utiliser AAAA-MM-JJTHH:MM.');
        }
      } else {
        alert('Opération annulée.');
      }
    } 
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