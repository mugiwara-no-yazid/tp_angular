import { Injectable } from '@angular/core';
import { INote, listeCheck } from '../models/Inotes';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes:INote [] = this.init();
  getNotes(): INote[] {
    return this.notes.filter(note => note.archiver === false && note.supprimer === false )
  }
  createNote(noteData: {
    titre: string;
    contenu: string | listeCheck[];
    couleur: string;
    rappelleDate: Date | null;
    colaborateur: string[];
}): INote {
    const newNote: INote = {
        id: "note"+(this.notes.length + 1),
        dateCreation: new Date(),
        archiver: false,
        epingler: false,
        supprimer:false,
        ...noteData
    };
    this.notes.push(newNote);
    return newNote;
}
  deleteNote(id: string): void {
    let  notesupprimer = this.getNoteById(id);
    if(notesupprimer)
    {
      notesupprimer.supprimer = true;
    }
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
         this.deleteNote(id);
       this.notes.push(noteToUpdate);
      return noteToUpdate;
  }
    getPingNotes(): INote[] {
    return this.notes.filter(note => note.epingler && !note.archiver);
  }
  getArchivedNotes(): INote[] {
    return this.notes.filter(note => note.archiver === true);
  }
  getRappelleNotes(): INote[] {
    return this.notes.filter(note => note.rappelleDate!= null && !note.supprimer);
  }
  getDeletedNotes(): INote[] {
    return this.notes.filter(note => note.supprimer === true);
  }

 init():INote[]
  {
    const notes: INote[] = [
    {
        id: "note1",
        titre: "Liste de courses",
        supprimer: false,
        contenu: [
            { contenu: "Lait", cheker: false },
            { contenu: "Pain", cheker: true },
            { contenu: "Œufs", cheker: false }
        ],
        couleur: "#FFD700",
        archiver: true,
        epingler: true,
        rappelleDate: new Date("2023-12-15T09:00:00"),
        dateCreation: new Date("2023-11-10T14:30:00"),
        colaborateur: ["user1@example.com", "user2@example.com"]
    },
    {
        id: "note2",
        titre: "Projet React",
        contenu: "Terminer le composant Note avant vendredi",
        supprimer: false,
        couleur: "#87CEFA",
        archiver: false,
        epingler: false,
        rappelleDate: new Date("2023-12-20T17:00:00"),
        dateCreation: new Date("2023-11-05T10:15:00"),
        colaborateur: ["dev@example.com"]
    },
    {
        id: "note3",
        titre: "Archive test",
        contenu: "Note archivée exemple",
        couleur: "#90EE90",
        archiver: true,
        supprimer: false,
        epingler: false,
        rappelleDate: new Date("2023-10-01T12:00:00"),
        dateCreation: new Date("2023-09-28T16:45:00"),
        colaborateur: []
    },
    {
        id: "note4",
        titre: "Rappel vide",
        contenu: "",
        couleur: "#FFA07A",
        archiver: false,
        supprimer: true,
        epingler: true,
        rappelleDate: new Date("2023-12-31T23:59:00"),
        dateCreation: new Date("2023-12-01T08:00:00"),
        colaborateur: ["admin@example.com"]
    }
];
return notes;
  }

}
