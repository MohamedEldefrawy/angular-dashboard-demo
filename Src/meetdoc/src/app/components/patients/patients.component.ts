import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientsService} from 'src/app/services/patients/patients.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {

  patients: any = [];
  dataSource !: MatTableDataSource<any>;
  @ViewChild('paginator') paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private patientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.patientsService.patients(1).subscribe((response) => {
      this.patients.push(...response.patients);
      this.dataSource = new MatTableDataSource<any>(this.patients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ["PatientName", "PatientID", "Age", "MobileNumber", "LastVisit", "Actions"]


  filterDate($event: any) {
    this.dataSource.filter = $event.target.value.trim().toLowerCase();
  }


}

