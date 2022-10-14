import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ClinicWorkingSlotsService {
  url: string = urls.clinic_working_slots_url

  constructor(private http: HttpClient) {
  }

  getClinicWorkingSlots(clinic_id: any) {
    this.url = this.url.replace("{id}", clinic_id.toString())
    return this.http.get<any>(this.url)
  }

}
