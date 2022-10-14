import {Component, OnInit} from '@angular/core';
import {ClinicWorkingSlotsService} from "../../services/workingSlots/clinic-working-slots.service";
import {AppointmentTypeService} from "../../services/appointmentTypes/appointmentType.service";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-clinic-schedule',
  templateUrl: './clinic-schedule.component.html',
  styleUrls: ['./clinic-schedule.component.css']
})

export class ClinicScheduleComponent implements OnInit {
  timeSlots: any = {}
  servicesType: any = [];
  service_days: any = {
    saturday: [],
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  }
  filtered_days: any = {
    saturday: [],
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  }
  all_days: any = {
    saturday: [],
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  }
  daysSlotsRemaining: any = []


  constructor(private clinicWorkingSlotsService: ClinicWorkingSlotsService, private appointmentTypeService: AppointmentTypeService) {
  }

  ngOnInit(): void {

    this.appointmentTypeService.services().subscribe((response) => {
      this.servicesType.push({id: 4, name: "All"})
      this.servicesType.push(...response.data)
    })

    this.clinicWorkingSlotsService.getClinicWorkingSlots(1).subscribe((response) => {

      this.timeSlots["breakTime"] = response.data.breakTime
      this.timeSlots["slotDuration"] = response.data.slotDuration
      this.timeSlots["serviceType"] = []
      if (response.data.doctor != "")
        for (let service of response.data.doctor.doctor_services) {
          for (let slot of service.slots) {
            switch (slot.day.name) {
              case "Saturday": {
                this.service_days.saturday.push(slot.start_time)
                this.filtered_days.saturday.push(slot.start_time)
                this.all_days.saturday.push(slot.start_time)
                break;
              }
              case "Sunday": {
                this.service_days.sunday.push(slot.start_time)
                this.filtered_days.sunday.push(slot.start_time)
                this.all_days.sunday.push(slot.start_time)
                break;
              }
              case "Monday": {
                this.service_days.monday.push(slot.start_time)
                this.filtered_days.monday.push(slot.start_time)
                this.all_days.monday.push(slot.start_time)
                break;
              }
              case "Tuesday": {
                this.service_days.tuesday.push(slot.start_time)
                this.filtered_days.tuesday.push(slot.start_time)
                this.all_days.tuesday.push(slot.start_time)
                break;
              }
              case "Wednesday": {
                this.service_days.wednesday.push(slot.start_time)
                this.filtered_days.wednesday.push(slot.start_time)
                this.all_days.wednesday.push(slot.start_time)
                break;
              }
              case "Thursday": {
                this.service_days.thursday.push(slot.start_time)
                this.filtered_days.thursday.push(slot.start_time)
                this.all_days.thursday.push(slot.start_time)
                break;
              }
              case "Friday": {
                this.service_days.friday.push(slot.start_time)
                this.filtered_days.friday.push(slot.start_time)
                this.all_days.friday.push(slot.start_time)
                break;
              }
            }
          }

          this.timeSlots.serviceType.push({
            name: service.serviceType.name,
            days: this.service_days
          });
          this.resetServiceDays();
        }
      this.calculateNumberOfBlankSlots();
    });
  }

  private calculateNumberOfBlankSlots() {
    this.daysSlotsRemaining = []
    for (let key in this.filtered_days) {
      this.daysSlotsRemaining.push(ClinicScheduleComponent.getRemainingDaysRange(7 - this.filtered_days[key].length))
    }
  }

  private resetServiceDays() {
    this.service_days = {
      saturday: [],
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: []
    }
  }

  private static getRemainingDaysRange(range: number) {
    let result = []
    for (let i = 1; i <= range; i++) {
      result.push(i)
    }
    return result;
  }

  toDate(timeSlot: string) {
    return new Date("1995-07-03 " + timeSlot)
  }

  typeFilter(event: MatSelectChange) {

    if (event.value == "All") {
      this.filtered_days = this.all_days;
    } else {
      let filtered_object: any = this.timeSlots.serviceType.find((slot: any) => slot.name === event.value);
      if (filtered_object)
        this.filtered_days = filtered_object.days;
    }
    this.calculateNumberOfBlankSlots();
  }
}
