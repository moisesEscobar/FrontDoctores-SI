import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private navController: NavController) {

  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('user')) {
      if(next.routeConfig.path == 'log-in' || next.routeConfig.path == 'sign-in') {
        let userLocal = JSON.parse(localStorage.getItem('user'));
        if(userLocal.session.user.rol_id == 1)    
          this.navController.navigateRoot('')
        else
          this.navController.navigateRoot('home-patient')
        return false
      }
      else {
        return true
      }
    }
    else {
      if(next.routeConfig.path == 'log-in' || next.routeConfig.path == 'sign-in') {
        return true
      }
      else {
        this.navController.navigateRoot('log-in')
        return false
      }
    }
  }
}
