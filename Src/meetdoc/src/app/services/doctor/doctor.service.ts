import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctor_url : string = urls.doctor_url

  constructor(private http : HttpClient) { }

  doctor(id : any){
    return this.http.get<any>(this.doctor_url+id)
  }
}
