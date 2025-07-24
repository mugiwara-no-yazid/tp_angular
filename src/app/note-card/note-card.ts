import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote } from '../models/Inotes';
import { DatePipe } from '@angular/common';
import { NoteService } from '../service/note';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-note-card',
  imports: [DatePipe],
templateUrl: "./note-card.html",
styleUrls: ["./note-card.css"]
})
export class NoteCard {
  @Input() note!: INote;
  @Output() edit = new EventEmitter<INote>();
  @Output() delete = new EventEmitter<string>();
  private noteService ;
   couleur: string = '#ffffff';

  constructor(noteService : NoteService){
    this.noteService = noteService;
  }

//fonction pour
/**
 * @function editNote pour rediriger vers le formulaire de edite
 */
  editNote() {
    console.log(this.note);
    //this.noteService.updateNote(this.note.id , this.note);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
  }

  archiveNote(){
    this.note.archiver = true;
    console.log(this.noteService.getArchivedNotes())
  }
changeCouleur(event: Event) {
  const input = event.target as HTMLInputElement;
  this.note.couleur = input.value;
}

}
