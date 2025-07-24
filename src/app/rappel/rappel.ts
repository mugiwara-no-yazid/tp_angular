import { Component } from '@angular/core';
import { NoteService } from '../service/note';
import { NoteCard } from '../note-card/note-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rappel',
  standalone: true,
  imports: [NoteCard],
  templateUrl: './rappel.html',
  styleUrl: './rappel.css'
})
export class Rappel {
  constructor(public noteService: NoteService) {}
}
