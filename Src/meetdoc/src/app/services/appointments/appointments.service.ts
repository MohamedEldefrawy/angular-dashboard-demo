import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  appointments_url: string = urls.appointments_url;

  constructor(private http: HttpClient) {
  }

  appointments() {
    return this.http.get<any>(this.appointments_url)
  }


}
