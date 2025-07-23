import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm{

  @Input() noteAEditer: Note | null = null;

  titre: string = '';
  contenu: string = '';
  couleur: string = '#ffffff';

idNoteActuelle: string | undefined;

  @Output() formulaireSoumis = new EventEmitter<void>();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    if (this.noteAEditer) {
      this.idNoteActuelle = this.noteAEditer.id;
      this.titre = this.noteAEditer.titre;
      this.contenu = this.noteAEditer.contenu;
      this.couleur = this.noteAEditer.couleur;
    } else {
      this.idNoteActuelle = undefined;
      this.titre = '';
      this.contenu = '';
      this.couleur = '#ffffff';
    }
  }

  gererSoumission(formulaire: NgForm): void {
    if (formulaire.valid) {
      const noteSoumise: Note = {
        id: this.idNoteActuelle,
        titre: this.titre,
        contenu: this.contenu,
        couleur: this.couleur
      };

      if (this.idNoteActuelle) {
        this.noteService.modifierNote(noteSoumise);
        console.log('Note soumise en MODIFICATION:', noteSoumise);
      } else {
        this.noteService.ajouterNote(noteSoumise);
        console.log('Note soumise en AJOUT:', noteSoumise);
      }

      formulaire.resetForm();
      this.couleur = '#ffffff';
      this.idNoteActuelle = undefined;

      this.formulaireSoumis.emit();

    } else {
      console.log('Formulaire invalide - Veuillez corriger les erreurs.');
      Object.values(formulaire.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}