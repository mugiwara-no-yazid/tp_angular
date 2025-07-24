import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote } from '../models/Inotes';
import { DatePipe } from '@angular/common';
import { NoteService } from '../service/note';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-note-card',
  imports: [],
templateUrl: "./note-card.html",
styleUrls: ["./note-card.css"]
})
export class NoteCard {
  @Input() note!: INote;

  private noteService ;
   couleur: string = '#ffffff';

  constructor(noteService : NoteService){
    this.noteService = noteService;
  }


  editNote() {
    console.log(this.note);
    //this.noteService.updateNote(this.note.id , this.note);
  }

  deleteNote() {
    console.log("ICI");
    
    if ( this.note.supprimer === true) {
      this.note.supprimer = false;
    }else{
      this.note.supprimer = true;
    }
  }

  archiveNote(){
    if (this.note.archiver === false) {
      this.note.archiver = true;
    }else
      this.note.archiver = false;
  }
changeCouleur(event: Event) {
  const input = event.target as HTMLInputElement;
  this.note.couleur = input.value;
}

}
