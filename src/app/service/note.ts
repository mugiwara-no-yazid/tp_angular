import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes:INote[] = [];
 
  getNotes()
   {
    return this.notes;
   }
  createNote(noteData: {
    titre: string;
    contenu: string | listeCheck[];
    couleur: string;
    rappelleDate: Date;
    colaborateur: string[];
}): INote {
    const newNote: INote = {
        ...noteData,
        id: "note"+this.notes.length,
        dateCreation: new Date(),
        archiver: false,
        epingler: false
    };
    this.notes.push(newNote);
    return newNote;
}

  getNoteById(id: string): INote | undefined {
    const note = this.notes.find(note => note.id === id)
    return note? note : undefined;
  }

    updateNote(id: string, newNote:INote): INote | null {
      const noteToUpdate = this.notes.find(note => note.id === id);
      if (!noteToUpdate) return null;
        noteToUpdate.id =id;
        noteToUpdate.dateCreation = noteToUpdate.dateCreation;
      if (newNote.titre !== undefined && newNote.titre !== "") 
          noteToUpdate.titre = newNote.titre;
      
      if (newNote.contenu !== undefined && newNote.contenu !== "") 
          noteToUpdate.contenu = newNote.contenu;
      
      if (newNote.couleur !== undefined && newNote.couleur !== "") 
          noteToUpdate.couleur = newNote.couleur;

      if (newNote.archiver !== undefined) 
          noteToUpdate.archiver = newNote.archiver;
        
      if (newNote.epingler !== undefined) 
          noteToUpdate.epingler = newNote.epingler;

      if (newNote.rappelleDate !== undefined ) 
          noteToUpdate.rappelleDate = newNote.rappelleDate;

      if (newNote.colaborateur !== undefined && newNote.colaborateur.length === 0) 
          noteToUpdate.colaborateur = newNote.colaborateur;
       this.notes.push(noteToUpdate)
      return noteToUpdate;
  }

  deleteNote(id: string): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

 init():INote[]
  {
    const notes: INote[] = [
    {
        id: "1",
        titre: "Liste de courses",
        contenu: [
            { contenu: "Lait", cheker: false },
            { contenu: "Pain", cheker: true },
            { contenu: "Œufs", cheker: false }
        ],
        couleur: "#FFD700",
        archiver: false,
        epingler: true,
        rappelleDate: new Date("2023-12-15T09:00:00"),
        dateCreation: new Date("2023-11-10T14:30:00"),
        colaborateur: ["user1@example.com", "user2@example.com"]
    },
    {
        id: "2",
        titre: "Projet React",
        contenu: "Terminer le composant Note avant vendredi",
        couleur: "#87CEFA",
        archiver: false,
        epingler: false,
        rappelleDate: new Date("2023-12-20T17:00:00"),
        dateCreation: new Date("2023-11-05T10:15:00"),
        colaborateur: ["dev@example.com"]
    },
    {
        id: "3",
        titre: "Archive test",
        contenu: "Note archivée exemple",
        couleur: "#90EE90",
        archiver: true,
        epingler: false,
        rappelleDate: new Date("2023-10-01T12:00:00"),
        dateCreation: new Date("2023-09-28T16:45:00"),
        colaborateur: []
    },
    {
        id: "4",
        titre: "Rappel vide",
        contenu: "",
        couleur: "#FFA07A",
        archiver: false,
        epingler: true,
        rappelleDate: new Date("2023-12-31T23:59:00"),
        dateCreation: new Date("2023-12-01T08:00:00"),
        colaborateur: ["admin@example.com"]
    }
];
return notes;
  }

}
