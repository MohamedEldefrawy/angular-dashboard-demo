import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  resetPassword_url : string = urls.resetPassword_url;

  constructor(private http: HttpClient) { }

  resetPassword(resetPasswordData:any){
    return this.http.post<any>(this.resetPassword_url,resetPasswordData)
  }
}
