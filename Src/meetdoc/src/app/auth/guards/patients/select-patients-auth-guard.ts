import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {AuthService} from "../../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SelectPatientsAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasSelectPatientPermissions(route.data['permissions']).pipe(
      map(canSelectDoctor => canSelectDoctor || this.router.createUrlTree(['/']))
    )
  }
}
