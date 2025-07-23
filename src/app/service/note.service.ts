// src/app/service/note.service.ts

import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _listeNotes: Note[] = [
    { id: '1', titre: 'Ma Première Note', contenu: 'Ceci est le contenu de ma première note.', couleur: '#FFDDC1' },
    { id: '2', titre: 'Ma Deuxième Note', contenu: 'Une autre note importante.', couleur: '#D4EEFF' }
  ];

  private notesSubject = new BehaviorSubject<Note[]>(this._listeNotes);
  public notes$: Observable<Note[]> = this.notesSubject.asObservable();

  constructor() { }
}