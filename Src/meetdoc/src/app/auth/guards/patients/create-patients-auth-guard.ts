import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {AuthService} from "../../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CreatePatientsAuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasCreatePatientPermissions(route.data['permissions']).pipe(
      map(canCreateDoctor => canCreateDoctor || this.router.createUrlTree(['/']))
    )
  }

  constructor(private authService: AuthService, private router: Router) {
  }
}
