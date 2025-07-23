import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote } from '../models/Inotes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [DatePipe],
template: `
  @if (note) {
    <div class="note-card" [style.background]="note.couleur">
      <div class="note-actions">
        <button (click)="editNote()">Edit</button>
        <button (click)="deleteNote()">Delete</button>
      </div>

      <h3>{{ note.titre }}</h3>

      @if (typeof note.contenu === 'string') {
        <p>{{ note.contenu }}</p>
      } @else if (note.contenu) {
        <ul>
          @for (item of note.contenu; track $index) {
            <li>
              <input type="checkbox" [checked]="item.cheker">
              {{ item.contenu }}
            </li>
          }
        </ul>
      }
      <small>Created: {{ note.dateCreation | date:'shortDate' }}</small>
    </div>
  }
`,
styles: [`
  .note-card {
    min-width: 250px;  /* Minimum width */
    min-height: 180px; /* Minimum height */
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.23);
    }
  }

  .note-actions {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 4px;
  }

  .note-actions button {
    background: rgba(255,255,255,0.7);
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
  }

  .note-actions button:hover {
    background: white;
  }
`]
})
export class NoteCard {
  @Input() note!: INote;
  @Output() edit = new EventEmitter<INote>();
  @Output() delete = new EventEmitter<string>();

  editNote() {
    this.edit.emit(this.note);
  }

  deleteNote() {
    this.delete.emit(this.note.id);
  }
}
