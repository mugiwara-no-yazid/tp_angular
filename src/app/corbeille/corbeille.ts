import { Component } from '@angular/core';
import { NoteService } from '../service/note';
import { INote } from '../models/Inotes';
import { NoteCard } from '../note-card/note-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corbeille',
  standalone:true,
  

  imports: [CommonModule, NoteCard],
  templateUrl: './corbeille.html',
  styleUrl: './corbeille.css'
})
export class Corbeille {
   public note: INote | any;
  constructor(public noteService: NoteService) {}

}
