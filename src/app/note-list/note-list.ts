import { Component } from '@angular/core';
import { NoteService } from '../service/note';
import { NoteCard } from '../note-card/note-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteCard],
  template: `
    <div class="notes-grid">
      @for (note of noteService.getNotes(); track note.id) {
        <app-note-card [note]="note"></app-note-card>
      } @empty {
        <p>No notes found</p>
      }
    </div>
  `,
  styles: [`
    .notes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  `]
})
export class NoteList {
  constructor(public noteService: NoteService) {}
}
