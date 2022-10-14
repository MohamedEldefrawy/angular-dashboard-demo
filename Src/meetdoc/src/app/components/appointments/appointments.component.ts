import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentsService} from "../../services/appointments/appointments.service";
import {MatTableDataSource} from "@angular/material/table";
import {ClinicsService} from "../../services/clinics/clinics.service";
import {DepartmentsService} from "../../services/departments/departments.service";
import {AppointmentTypeService} from "../../services/appointmentTypes/appointmentType.service";
import {MatPaginator} from "@angular/material/paginator";
import * as _ from "lodash";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";



@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  clinics: any = [];
  departments: any = [];
  servicesType: any = [];
  appointmentsDate: any = [];
  dataTableData: any = [];
  apiResponse:any = [];

  dataSource !: MatTableDataSource<any>;
  @ViewChild('paginator') paginator !: MatPaginator;



  selectedAppointmentsDate: any;
  selectedAppointmentsType: any;


  constructor(private appointmentTypeService: AppointmentTypeService, private departmentService: DepartmentsService, private clinicsService: ClinicsService, private appointmentsService: AppointmentsService) {
  }

  ngOnInit(): void {
    this.selectedAppointmentsDate = 'All';
    this.selectedAppointmentsType = 'All';

    this.appointmentsService.appointments().subscribe((response) => {
      console.log(response.data)
      this.appointmentsDate.push(...response.data.startDate);
      this.dataTableData.push(...response.data.dataTable);
      this.dataSource = new MatTableDataSource<any>(this.dataTableData);
      this.apiResponse = this.dataTableData;
      this.dataSource.paginator = this.paginator;

    })

    // all clinics data
    this.clinicsService.clinics().subscribe((response) => {
      this.clinics.push(...response.data);
    })
    // all Departments data
    this.departmentService.departments().subscribe((response) => {
      this.departments.push(...response.data);
    })
    // all appointments Type data
    this.appointmentTypeService.services().subscribe((response) => {
      this.servicesType.push(...response.data)
    })
  }

  displayedColumns:string[] = [ "patientName", "departmentName", "appointment_date", "appointmentType","Actions"]

  typeFilter($event:any){
    if ($event.value == undefined){
      this.dataSource = new MatTableDataSource(this.dataTableData);
      this.dataSource.paginator = this.paginator;
    }else{
      let filterType = _.filter(this.dataTableData,(item:any)=>{
        return item.appointmentType.name.toLowerCase() == $event.value.toLowerCase()
      })
      this.dataSource = new MatTableDataSource(filterType);
    }


  }

  dateFilter($event:any){

    let dateFilter = _.filter(this.dataTableData,(item:any)=>{
      let pickerDate = new Date($event.value)
      let TableDate = new Date(item.appointment_date)
      return TableDate.toLocaleDateString() == pickerDate.toLocaleDateString()
    })
    this.dataSource = new MatTableDataSource(dateFilter)
  }
}
