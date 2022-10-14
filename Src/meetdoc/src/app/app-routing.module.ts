import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLoginComponent} from "./components/login/adminLogin.component";
import {ClinicProfileComponent} from "./components/clinic-profile/clinic-profile.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PatientsComponent} from "./components/patients/patients.component";
import {AppointmentsComponent} from "./components/appointments/appointments.component";
import {DepartmentsComponent} from "./components/departments/departments.component";
import {ReportsComponent} from "./components/reports/reports.component";
import {LoginAuthGuard} from "./auth/guards/login-auth-guard";
import {
  AdminEmailSentComponent
} from "./components/email-sent/admin-email-sent.component";
import {SelectAppointmentAuthGuard} from "./auth/guards/appointments/select-appointment-auth-guard";
import {SelectDepartmentAuthGuard} from "./auth/guards/departments/select-department-auth-guard";
import {CreateDepartmentAuthGuard} from "./auth/guards/departments/create-department-auth-guard";
import {DeleteDepartmentAuthGuard} from "./auth/guards/departments/delete-department-auth-guard";
import {UpdateDepartmentAuthGuard} from "./auth/guards/departments/update-department-auth-guard";
import {CreateAppointmentAuthGuard} from "./auth/guards/appointments/create-appointment-auth-guard";
import {UpdateAppointmentAuthGuard} from "./auth/guards/appointments/update-appointment-auth-guard";
import {DeleteAppointmentAuthGuard} from "./auth/guards/appointments/delete-appointment-auth-guard";
import {CreatePatientsAuthGuard} from "./auth/guards/patients/create-patients-auth-guard";
import {UpdatePatientsAuthGuard} from "./auth/guards/patients/update-patients-auth-guard";
import {DeletePatientsAuthGuard} from "./auth/guards/patients/delete-patients-auth-guard";
import {SelectPatientsAuthGuard} from "./auth/guards/patients/select-patients-auth-guard";
import {permissions} from 'src/environments/environment';
import {SendMailUsernameComponent} from "./components/send-mail-username/send-mail-username.component";
import {ResetYourPasswordComponent} from "./components/reset-password/reset-your-password.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {DoctorDetailsComponent} from "./components/doctor-details/doctor-details.component";
import {ClinicScheduleComponent} from "./components/clinic-schedule/clinic-schedule.component";
import {ClinicReviewComponent} from "./components/clinic-review/clinic-review.component";

const routes: Routes = [
  {path: "login", component: AdminLoginComponent},
  {path: "", component: DashboardComponent, canActivate: [LoginAuthGuard]},
  {
    path: "clinic-profile", component: ClinicProfileComponent, canActivate: [LoginAuthGuard],
    children: [
      {path: "details", component: DoctorDetailsComponent},
      {path: "schedule", component: ClinicScheduleComponent},
      {path: "reviews", component: ClinicReviewComponent}
    ]
  },
  {
    path: "patients",
    component: PatientsComponent,
    canActivate: [LoginAuthGuard, CreatePatientsAuthGuard, UpdatePatientsAuthGuard, DeletePatientsAuthGuard, SelectPatientsAuthGuard],
    data: {
      permissions:
        [permissions.selectPatient, permissions.updatePatient, permissions.deletePatient, permissions.createPatient]
    }
  },
  {
    path: "appointments",
    component: AppointmentsComponent,
    canActivate: [LoginAuthGuard, SelectAppointmentAuthGuard, CreateAppointmentAuthGuard, UpdateAppointmentAuthGuard, DeleteAppointmentAuthGuard],
    data: {permissions: [permissions.createAppointment, permissions.updateAppointment, permissions.deleteAppointment, permissions.selectAppointment]}
  },
  {
    path: "departments",
    component: DepartmentsComponent,
    canActivate: [LoginAuthGuard, SelectDepartmentAuthGuard, CreateDepartmentAuthGuard, DeleteDepartmentAuthGuard, UpdateDepartmentAuthGuard],
    data: {permissions: [permissions.createDepartment, permissions.updateDepartment, permissions.deleteDepartment, permissions.selectDepartment]}
  },
  {path: "reports", component: ReportsComponent, canActivate: [LoginAuthGuard]},
  {path: "send-mail" ,component: SendMailUsernameComponent },
  {path: "check-mail" ,component: AdminEmailSentComponent },
  {path: "reset-password" ,component: ResetYourPasswordComponent },
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
