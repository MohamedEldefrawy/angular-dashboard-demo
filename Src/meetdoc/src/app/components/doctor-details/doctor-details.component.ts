import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  specialize = ''
  address = ''
  title = ''
  name = ''
  nomOfSessions : any
  years = ''
  experienceHeader : any = ''
  experience : any = []
  educationHeader : any = ''
  education : any = []
  certificateHEader : any = ''
  certificates : any = []


  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
    this.doctorService.doctor(1).subscribe((response)=>{
      this.name = response.data.name
      this.title = response.data.title
      this.address = response.data.address
      this.years = response.data.yearsOfExperience
      this.specialize = response.data.department

      if(response.data.sessions > 100){
        this.nomOfSessions = '+100'
      }else{
        this.nomOfSessions = response.data.sessions
      }

      this.experience = (response.data.experience)
      this.education = (response.data.education)
      this.certificates = (response.data.certificate)

      if(response.data.experience.length > 0){
        this.experienceHeader = this.experience.shift();
      }
      if(response.data.certificate.length > 0){
        this.certificateHEader = this.certificates.shift();
      }
      if(response.data.education.length > 0){
        this.educationHeader = this.education.shift();
      }
     

      if(this.experienceHeader !== '' && this.experience.length == 0){
        this.experience.push({clinic:'',details:'',from:'',to:''})
      }
      if(this.certificateHEader !== '' && this.certificates.length == 0){
        this.certificates.push({details:'', from:'', to:''})
      } 
      if(this.educationHeader !== '' && this.education.length == 0){
        this.education.push({details:'', from:'', to:''})
      } 
    },(response)=>{
      alert(response.error.message)
    })
  }

}
