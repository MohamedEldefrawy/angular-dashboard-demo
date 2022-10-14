import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients_url: string = urls.patients_url

  constructor(private http: HttpClient) { }

  patients(id : any) {
    return this.http.post<any>(this.patients_url,{'id':id})
  }
}
