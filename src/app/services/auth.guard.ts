import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
	constructor(public router: Router, public user: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.user.getUsuarioLogado()){
      this.router.navigate([''])
      return false;
    }
    this.user.resetarSessao();
    return true;
  }
}