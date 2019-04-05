import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()

// CanActivate est une interface qui oblige un certain format
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // si isAuth (l'utilisateur) est authentifié, on le laisse passer
    if(this.authService.isAuth) {
      return true;
    } else {
        // en revanche si ça ne l'est pas, il sera redirigé vers la page utilisateur
      this.router.navigate(['/auth']);
    }
  }
}