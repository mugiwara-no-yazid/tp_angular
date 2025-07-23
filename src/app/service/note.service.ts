// src/app/service/note.service.ts

import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public _listeNotes: Note[] = [
    { id: '1', titre: 'Ma Première Note', contenu: 'Ceci est le contenu de ma première note.', couleur: '#FFDDC1' },
    { id: '2', titre: 'Ma Deuxième Note', contenu: 'Une autre note importante.', couleur: '#D4EEFF' }
  ];

  private notesSubject = new BehaviorSubject<Note[]>(this._listeNotes);
  public notes$: Observable<Note[]> = this.notesSubject.asObservable();

  constructor() { }

  ajouterNote(nouvelleNote: Note): void {
    const noteAvecId = { ...nouvelleNote, id: this.genererIdUnique() };
    this._listeNotes.push(noteAvecId);
    this.notesSubject.next(this._listeNotes);
    console.log('Note AJOUTÉE par le service:', noteAvecId);
  }

  modifierNote(noteAMettreAJour: Note): void {
    const index = this._listeNotes.findIndex(n => n.id === noteAMettreAJour.id);
    if (index > -1) {
      this._listeNotes[index] = noteAMettreAJour;
      this.notesSubject.next(this._listeNotes);
      console.log('Note MISE À JOUR par le service:', noteAMettreAJour);
    } else {
      console.warn(`Tentative de mise à jour d'une note non trouvée avec l'ID: ${noteAMettreAJour.id}`);
    }
  }

  obtenirToutesLesNotes(): Observable<Note[]> {
    return this.notes$;
  }

  private genererIdUnique(): string {
    return 'note-' + Math.random().toString(36).substring(2, 9);
  }
}
