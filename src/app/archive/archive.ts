import { Component } from '@angular/core';
import { NoteService } from '../service/note';
import { INote } from '../models/Inotes';
import { NoteCard } from '../note-card/note-card';
@Component({
  selector: 'app-archive',
  imports: [NoteCard],
  templateUrl: './archive.html',
  styleUrl: './archive.css'
})
export class Archive {
  public note: INote | any;
  constructor(public noteService: NoteService) {}
  
}
