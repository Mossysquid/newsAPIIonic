import { HttpClient, provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"angular-firebase-bd4c5","appId":"1:173791629503:web:8d195361010a043e3cf60a","storageBucket":"angular-firebase-bd4c5.appspot.com","apiKey":"AIzaSyCYjqDHE7uiYQXlbBITqaVUgBijj6G4xaI","authDomain":"angular-firebase-bd4c5.firebaseapp.com","messagingSenderId":"173791629503","measurementId":"G-ZTBDFBXL2Y"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
});
