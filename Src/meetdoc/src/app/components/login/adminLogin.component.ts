import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersServicesService} from "../../services/users/users-services.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, FormGroupDirective, Validators, FormControl} from '@angular/forms';
import {ErrorStateMatcher} from "@angular/material/core";
import {HttpErrorResponse} from "@angular/common/http";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css'],
})
export class AdminLoginComponent implements OnInit {
  data: any = {}
  myForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(''),
  });


  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [false],
    },{updateOn:'blur'});
  }

  onSubmit() {
    this.data = {
      name: this.myForm.value.username,
      password: this.myForm.value.password,
      device_id: "web",
      new_device: false
    }

    this.usersServicesService.login(this.data).subscribe((response) => {
      if (this.myForm.value.rememberme == true) {
        localStorage.setItem("name", response.name);
        localStorage.setItem("id_token", response.token);
        localStorage.setItem("roles", response.roles);
        localStorage.setItem("userPermissions", response.userPermissions);
        localStorage.setItem("profile_image", response.profile_image);
        window.location.href = "/";
      } else {
        sessionStorage.setItem("name", response.name);
        sessionStorage.setItem("id_token", response.token);
        sessionStorage.setItem("roles", response.roles);
        sessionStorage.setItem("userPermissions", response.userPermissions);
        sessionStorage.setItem("profile_image", response.profile_image);
        window.location.href = "/";
      }
    },(response)=>{
      alert(response.error.message)
    })
  }

  onForgetPassword() {
    this.router.navigate(['/send-mail'])
  }

  constructor(private fb: FormBuilder, private usersServicesService: UsersServicesService, private router: Router, private formBuilder: FormBuilder) {
  }

}
