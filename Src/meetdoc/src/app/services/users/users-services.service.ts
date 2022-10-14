import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  login_url: string = urls.login_url;
  logout_url: string = urls.logout_url;

  constructor(private http: HttpClient) {
  }

  login(loginData: any) {
    return this.http.post<any>(this.login_url, loginData)
  }

  logout(logOut: any) {
    return this.http.post<any>(this.logout_url, logOut)
  }

}
