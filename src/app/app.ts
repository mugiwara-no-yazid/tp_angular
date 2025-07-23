import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NoteCard} from './note-card/note-card';
import { NoteForm } from './note-form/note-form';
import { NoteList } from './note-list/note-list';
import { SearchBar } from './search-bar/search-bar';
// import { Menu } from './menu/menu';
import { NoteService } from './service/note';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoteCard,NoteForm , NoteList, SearchBar],
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
  selectedNoteForEdit: any = null; // ou Note | null selon ton modèle

  onFormulaireSoumisAjout(): void {
    console.log('Formulaire d\'ajout soumis !');
  }

  onFormulaireSoumisModification(): void {
    console.log('Formulaire de modification soumis !');
  }

}

