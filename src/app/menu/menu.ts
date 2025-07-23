import { Component } from '@angular/core';
import { NoteList } from '../note-list/note-list';
import { NoteForm } from '../note-form/note-form';
import { Archive } from '../archive/archive';
import { Supprimer } from '../supprimer/supprimer';
import { Rappel } from '../rappel/rappel';

@Component({
  selector: 'app-menu',
  imports: [NoteList, NoteForm, Archive, Supprimer, Rappel],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
