import {Injectable} from '@angular/core';
import {urls} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfirmPasswordService {
  confirmPassword_url: string = urls.confirmPassword_url

  constructor(private http: HttpClient) {
  }

  confirmPassword(confirmPasswordData: any) {
    return this.http.post<any>(this.confirmPassword_url,confirmPasswordData)
  }
}
