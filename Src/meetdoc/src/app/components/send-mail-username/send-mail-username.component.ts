import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../services/ForgetPasswordCycle/reset-password.service";

@Component({
  selector: 'app-send-mail-username',
  templateUrl: './send-mail-username.component.html',
  styleUrls: ['./send-mail-username.component.css']
})
export class SendMailUsernameComponent implements OnInit {
  data: any = {}
  myForm: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  constructor(private router: Router, private fb: FormBuilder, private resetPasswordService: ResetPasswordService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],

    });
  }

  onSubmit() {
    this.data = {
      name: this.myForm.value.username,
    }

    this.resetPasswordService.resetPassword(this.data).subscribe((response) => {
      if (response.status) {
        this.router.navigate(['/check-mail'])
      }
    })
  }
}
