import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm  {
@Input() noteAEditer?: Note;

  titre: string = '';
  contenu: string = '';
  couleur: string = '#ffffff';
 

  gererSoumission(formulaire: NgForm) {
    // TODO : logique de soumission
  }

  toggleEpingler() {
    if (this.noteAEditer) {
      //this.noteAEditer.epingler = !this.noteAEditer.epingler;
    }
  }

  /*onContenuChange(value: string) {
    this.contenu = value;
  }*/

  
  
  onContenuChange(value: string) {
    this.contenu = value;
  }

  toggleRappel() {}
  ajouterCollaborateur() {}
  ajouterImage() {}
  afficherPlusOptions() {}
  annulerModification() {}
  refaireModification() {}
}
