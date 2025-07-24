import { Routes } from '@angular/router';
import { Archive } from './archive/archive';
import { Rappel } from './rappel/rappel';
import { NoteList } from './note-list/note-list';
import { NoteForm } from './note-form/note-form';
import { Corbeille } from './corbeille/corbeille';

export const routes: Routes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'archive', component: Archive },
    { path: 'reminders', component: Rappel },
    { path: 'notes', component: NoteList },
    { path: 'new-note', component: NoteForm },
    { path: 'corbeille', component: Corbeille },

];
