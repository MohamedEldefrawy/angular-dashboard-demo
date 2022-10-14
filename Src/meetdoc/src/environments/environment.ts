// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export const permissions = {
  createDepartment: "create_department",
  updateDepartment: "update_department",
  deleteDepartment: "delete_department",
  selectDepartment: "select_department",
  createDoctor: "create_doctor",
  updateDoctor: "update_doctor",
  deleteDoctor: "delete_doctor",
  selectDoctor: "select_doctor",
  createDoctorService: "create_doctor_service",
  updateDoctorService: "update_doctor_service",
  deleteDoctorService: "delete_doctor_service",
  selectDoctorService: "select_doctor_service",
  createService: "create_service",
  updateService: "update_service",
  deleteService: "delete_service",
  selectService: "select_service",
  createClinic: "create_clinic",
  updateClinic: "update_clinic",
  deleteClinic: "delete_clinic",
  selectClinic: "select_clinic",
  createWorkingSlots: "create_working_slots",
  updateWorkingSlots: "update_working_slots",
  deleteWorkingSlots: "delete_working_slots",
  selectWorkingSlots: "select_working_slots",
  createWorkingDays: "create_working_days",
  updateWorkingDays: "update_working_days",
  deleteWorkingDays: "delete_working_days",
  selectWorkingDays: "select_working_days",
  createClinicPatient: "create_clinic_patients",
  updateClinicPatient: "update_clinic_patients",
  deleteClinicPatient: "delete_clinic_patients",
  selectClinicPatient: "select_clinic_patients",
  createPatient: "create_patients",
  updatePatient: "update_patients",
  deletePatient: "delete_patients",
  selectPatient: "select_patients",
  createSymptoms: "create_patients_symptoms",
  updateSymptoms: "update_patients_symptoms",
  deleteSymptoms: "delete_patients_symptoms",
  selectSymptoms: "select_patients_symptoms",
  createMedicalDocument: "create_medical_document",
  updateMedicalDocument: "update_medical_document",
  deleteMedicalDocument: "delete_medical_document",
  selectMedicalDocument: "select_medical_document",
  createAppointment: "create_appointment",
  updateAppointment: "update_appointment",
  deleteAppointment: "delete_appointment",
  selectAppointment: "select_appointment",
  createStatus: "create_status",
  updateStatus: "update_status",
  deleteStatus: "delete_status",
  selectStatus: "select_status",
  uploadPatientDocuments: "upload_patient_documents",
  downloadPatientDocuments: "download_patient_documents",
}
export const roles = {
  admin: "SuperAdmin",
  clinicAdmin: "ClinicAdmin",
  doctor: "Doctor",
  staff: "ClinicStaff"
}
export const urls = {
  appointments_url: 'http://127.0.0.1:8000/api/appointments',
  clinics_url: 'http://127.0.0.1:8000/api/clinics',
  departments_url: 'http://127.0.0.1:8000/api/departments',
  patients_url: 'http://127.0.0.1:8000/api/clinic-patients',
  services_url: 'http://127.0.0.1:8000/api/services',
  login_url: 'http://localhost:8000/api/login',
  logout_url: 'http://localhost:8000/api/logout',
  resetPassword_url: 'http://localhost:8000/api/email/reset-password',
  confirmPassword_url: 'http://localhost:8000/api/email/confirm-password-change',
  doctor_url: 'http://localhost:8000/api/clinic-doctor/',
  clinic_working_slots_url: 'http://localhost:8000/api/clinics/clinic/{id}/working-slots',
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
