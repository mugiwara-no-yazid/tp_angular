import { Component } from '@angular/core';
import { MainContainer } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MainContainer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'keepgoogle';
   noteATesterEdition = {
    id: '1',
    titre: 'Note à modifier',
    contenu: 'Contenu initial de la note à éditer.',
    couleur: '#FFFFE0'
  };
  onFormulaireSoumis(): void {
    console.log('Le formulaire a été soumis ! (Depuis AppComponent)');
}
}
