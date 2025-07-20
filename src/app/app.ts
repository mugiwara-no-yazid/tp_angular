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
}
