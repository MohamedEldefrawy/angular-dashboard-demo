import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  services_url: string = urls.services_url;

  constructor(private http: HttpClient) {
  }

  services() {
    return this.http.get<any>(this.services_url)
  }
}
