import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({
        projectId: "facify",
        appId: "1:509791774647:web:d7bab588a7601ccdaaea32", 
        storageBucket: "facify.firebasestorage.app", 
        apiKey: "AIzaSyBL8xP2A-CI7bhSQnWfZ11ecTnI5rm7mt8", 
        authDomain: "facify.firebaseapp.com", 
        messagingSenderId: "509791774647", 
       })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
