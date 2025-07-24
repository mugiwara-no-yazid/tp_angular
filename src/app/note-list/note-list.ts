import { Component } from '@angular/core';
import { NoteService } from '../service/note';
import { NoteCard } from '../note-card/note-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteCard],
  templateUrl: "./note-list.html",
  styleUrls: ["./note-list.css"]
})
export class NoteList {
  constructor(public noteService: NoteService) {}
}
