import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NoteCard} from './note-card/note-card';
import { NoteForm } from './note-form/note-form';
import { NoteList } from './note-list/note-list';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoteCard, NoteForm, NoteList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'keepgoogle';
   noteATesterEdition = {
    id: '1',
    titre: 'Note à modifier',
    contenu: 'Contenu initial de la note à éditer.',
    couleur: '#FFFFE0'
  };
  onFormulaireSoumis(): void {
    console.log('Le formulaire a été soumis ! (Depuis AppComponent)');
}
}
