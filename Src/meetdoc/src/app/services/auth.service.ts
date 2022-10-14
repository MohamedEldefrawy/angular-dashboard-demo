import {Injectable} from '@angular/core';
import {of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }

  private static getUserPermissions() {
    if (sessionStorage.length > 0 ) {
      return JSON.parse(JSON.stringify(sessionStorage));

    } else if (localStorage.length > 0 ) {
      return JSON.parse(JSON.stringify(localStorage));

    }
  }

  private checkPermissions(permissions: String[]) {

    for (const permission of permissions) {
      if (AuthService.getUserPermissions().userPermissions.split(',').find((userPermission: String) => userPermission == permission) === undefined)
        return of(false);
    }
    return of(true);
  }

  isLoggedIn() {
    return of( !!localStorage.getItem("id_token") || !!sessionStorage.getItem("id_token"));
  }

  hasSelectAppointmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasCreateAppointmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasUpdateAppointmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasDeleteAppointmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasCreateDepartmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasUpdateDepartmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasDeleteDepartmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasSelectDepartmentPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasDeleteDoctorPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasSelectDoctorPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasCreateDoctorPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasUpdateDoctorPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasCreatePatientPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasSelectPatientPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasUpdatePatientPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }

  hasDeletePatientPermissions(permissions: String[]) {
    return this.checkPermissions(permissions);
  }
}
