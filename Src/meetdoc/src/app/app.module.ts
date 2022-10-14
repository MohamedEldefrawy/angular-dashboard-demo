import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {AdminLoginComponent} from './components/login/adminLogin.component';
import {ResetYourPasswordComponent} from './components/reset-password/reset-your-password.component';
import {
  AdminEmailSentComponent
} from './components/email-sent/admin-email-sent.component';
import {HomeComponent} from './components/home/home.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {ClinicProfileComponent} from './components/clinic-profile/clinic-profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PatientsComponent} from './components/patients/patients.component';
import {AppointmentsComponent} from './components/appointments/appointments.component';
import {DepartmentsComponent} from './components/departments/departments.component';
import {ReportsComponent} from './components/reports/reports.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth-interceptor";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {CustomPipesModule} from './custom-pipes/custom-pipes.module';
import { SendMailUsernameComponent } from './components/send-mail-username/send-mail-username.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { ClinicScheduleComponent } from './components/clinic-schedule/clinic-schedule.component';
import { ClinicReviewComponent } from './components/clinic-review/clinic-review.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSortModule} from "@angular/material/sort";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ResetYourPasswordComponent,
    AdminEmailSentComponent,
    HomeComponent,
    SideNavComponent,
    ClinicProfileComponent,
    DashboardComponent,
    PatientsComponent,
    AppointmentsComponent,
    DepartmentsComponent,
    ReportsComponent,
    SendMailUsernameComponent,
    NotFoundComponent,
    DoctorDetailsComponent,
    ClinicScheduleComponent,
    ClinicReviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CustomPipesModule,
    MatTabsModule,
    MatSortModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
