import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Note } from '../models/note';

import { NoteService} from '../service/note';
//import { NoteService } from "../service/note.service";


@Component({
  selector: 'app-note-form',
  imports: [FormsModule, CommonModule],  
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

constructor(private noteService: NoteService) { }
  gererSoumission(formulaire: NgForm) {
    //console.log("Valeurs du formulaire :", formulaire.value);
    //console.log("Titre :", this.titre);
    //console.log("Contenu :", this.contenu);
    //console.log("Couleur :", this.couleur);

    //console.log("Titre via formulaire.value :", formulaire.value.titre);
    //console.log("Contenu via formulaire.value :", formulaire.value.contenu);
    //console.log("Couleur via formulaire.value :", formulaire.value.couleur);

    // Create a new note object based on INote interface
    const nouvelleNote= {
      
      titre: this.titre,
      contenu: this.contenu,
      couleur: this.couleur,        
      rappelleDate: null, 
      colaborateur: [] 
    };
    this.noteService.createNote(nouvelleNote);
  }

  
  toggleEpingler() {
    if (this.noteAEditer) {
      //this.noteAEditer.epingler = !this.noteAEditer.epingler;
    }
  }

  

  
  
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
