import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  departments_url:string= urls.departments_url;

  constructor(private http: HttpClient) { }

  departments(){
    return this.http.get<any>(this.departments_url)
  }
}
