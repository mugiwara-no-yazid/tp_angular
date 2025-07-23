import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; 
import { provideRouter } from '@angular/router'
import { appConfig } from './app/app.config';
import { App } from './app/app';


bootstrapApplication(App, {
  providers: [
    // Laisse ce tableau vide si tu n'as pas d'autres providers globaux spécifiques
    // ou si tu ne veux pas activer de fonctionnalités comme SSR pour le moment.
    // Si tu vois des lignes comme "provideClientHydration()", cela peut venir du SSR.
  ]
}).catch(err => console.error(err));
  

  