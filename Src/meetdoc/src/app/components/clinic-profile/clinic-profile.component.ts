import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-clinic-profile',
  templateUrl: './clinic-profile.component.html',
  styleUrls: ['./clinic-profile.component.css']
})
export class ClinicProfileComponent implements OnInit {

  links = [{name: "Dr Details", uri: "details"}, {name: "Schedule", uri: "schedule"}, {
    name: "reviews",
    uri: "reviews"
  }];

  activeLink = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url
      }
    });
  }

  ngOnInit(): void {
  }

}
