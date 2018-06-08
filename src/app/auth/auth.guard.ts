import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate( route: ActivatedRouteSnapshot ) {
      console.log('route');
      console.log(route);
      var tipo = JSON.parse(localStorage.getItem('tipo'));
      console.log(tipo);

      if ( localStorage.getItem('tipo') ) {
          // logged in so return true
          if (tipo=="Profesor"){
            return true;
          }

      }
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
  }
}
