import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../services/ForgetPasswordCycle/reset-password.service";

@Component({
  selector: 'app-email-sent',
  templateUrl: './admin-email-sent.component.html',
  styleUrls: ['./admin-email-sent.component.css']
})
export class AdminEmailSentComponent implements OnInit {



  constructor(private router: Router) {}



  ngOnInit(): void {
  }

  onNotReceive() {
    this.router.navigate(['/send-mail'])
  }



}
