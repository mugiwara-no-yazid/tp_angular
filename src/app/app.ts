import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NoteCard} from './note-card/note-card';
import { NoteForm } from './note-form/note-form';
import { NoteList } from './note-list/note-list';
import { SearchBar } from './search-bar/search-bar';
// import { Menu } from './menu/menu';
import { NoteService } from './service/note';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoteCard,NoteForm , NoteList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'keep Google';
constructor(private noteservice : NoteService){
  
    
    this.noteservice.createNote({
        titre: "Liste de courses",
        contenu: [
            { contenu: "Lait", cheker: false },
            { contenu: "Pain", cheker: true },
            { contenu: "Œufs", cheker: false }
        ],
        couleur: "#FFD700",
        rappelleDate: new Date("2023-12-15T09:00:00"),
        colaborateur: ["user1@example.com", "user2@example.com"]});

        console.log(this.noteservice.getNoteById("note4"));
        
        //console.log(this.noteservice.getNotes())
        
  }
}
