import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  clinics_url:string= urls.clinics_url;

  constructor(private http: HttpClient) { }

  clinics(){
    return this.http.get<any>(this.clinics_url)
  }
}
