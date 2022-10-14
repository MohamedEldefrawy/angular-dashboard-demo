import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmPasswordService} from "../../services/ForgetPasswordCycle/confirm-password.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-your-password.component.html',
  styleUrls: ['./reset-your-password.component.css']
})
export class ResetYourPasswordComponent implements OnInit {
  data: any = {}
  message:string = '';
  user_url:string='';
  myForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),

  });

  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder, private router: Router, private confirmPasswordService: ConfirmPasswordService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.user_url = params['user']
    });
  }

  onSubmit() {
    this.data = {
      password: this.myForm.value.password,
      confirmPassword: this.myForm.value.confirmPassword,
      name: this.user_url,
    }
    if (this.myForm.value.password === this.myForm.value.confirmPassword) {
      this.confirmPasswordService.confirmPassword(this.data).subscribe((response) => {
        console.log(response)
        this.router.navigate(['/login'])
      })
    } else{
      this.message = '*password fields should be identical'
      console.log(this.message)
    }



  }

}
