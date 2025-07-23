import { Component } from '@angular/core';
import { Archive } from '../archive/archive';
import { NoteList } from '../note-list/note-list';
import { NoteForm } from '../note-form/note-form';
import { Rappel } from '../rappel/rappel';
import { Supprimer } from '../supprimer/supprimer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-container', // J'ai changé le nom du sélecteur
  imports: [Archive, FormsModule, CommonModule, NoteForm, Rappel, Supprimer, NoteList],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css']
})
export class MainContainer { // J'ai renommé la classe
  sectionsVisibility: Record<string, boolean> = {
    noteList: false,
    noteForm: false,
    rappel: false,
    corbeille: false,
    archive: false,
  };

  toggle(section: string) {
    this.sectionsVisibility[section] = !this.sectionsVisibility[section];
  }
}
