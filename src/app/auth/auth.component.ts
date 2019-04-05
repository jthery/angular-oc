import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  // création de propriété local au status, qui correspond à isAuth dans le service
  authStatus: boolean;
  // injection AuthService pour utiliser les méthodes qu'on vient de créer
  constructor(private authService: AuthService, private router: Router) { }
  
  
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  // relié à signIn qui est dans notre auth.service.ts
  onSignIn() {
    this.authService.signIn().then(
      () => {
        // console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        // on commente la console, et navigate, va nous permettre lors de la connexion d'accéder directement à la page des appareils
        this.router.navigate(['appareils']);
      }
    );
  }

  // relié à notre signOut qui est dans notre auth.service.ts
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }


}
