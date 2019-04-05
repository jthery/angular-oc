import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms'
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
// Importation de notre route via la bibliothèque angular
import { RouterModule, Routes } from "@angular/router";
// Importation du service pour l'authentification
import { AuthService } from './services/auth.service';
// component qui concerne le détail de chaque appareil
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
// component qui concerne l'erreur 404
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'
// concerne le service des authentificatin protégés
import { AuthGuard } from './services/auth-guard.service';

// Création des routes
const appRoutes: Routes = [
  // canActivate a été ajouté pour pouvoir faire fonctionner notre protection de route.
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  // le /:id va nous permettre d'exploiter l'information de ce fragment d'URL
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  // route qui correspond à notre component four-oh-four
  { path: 'not-found', component: FourOhFourComponent },
  // pour être certain de repartir à la racine de la route, les ** signifie tous les liens, et que si on mets un lien qui ne fonctionne pas, on sera redirger vers la page notfound
  // il est essentiel de le mettre à la fin, car angular va lire les routes dans l'ordre
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    // pour faire fonctionner notre module FormsModule
    FormsModule,
    // pour intégrer les routes dans l'application
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // pour faire fonctionner notre fichier appareil.service.ts
    AppareilService,
    // pour faire fonctionner notre fichier auth.service.ts
    AuthService,
    // pour faire fonctionner notre ficher auth-guard.service.ts
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
