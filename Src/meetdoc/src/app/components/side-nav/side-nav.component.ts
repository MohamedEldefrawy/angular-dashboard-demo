import {Component, OnInit} from '@angular/core';
import {UsersServicesService} from "../../services/users/users-services.service";
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  username:string = "";
  data: any = {}
  // opened: boolean = false;
  isLoggedIn = false;
  profileOptions: any = ["Admin", "Logout"];
  filteredOptions: any;
  userRole: String = "";
  activeLink = ""
  profilePicture:string="";


  constructor(private authService: AuthService, private usersServicesService: UsersServicesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url
      }
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('name') || sessionStorage.getItem('name') || ''
    this.profilePicture = localStorage.getItem('profile_image') || sessionStorage.getItem('profile_image') || ''

    this.userRole = localStorage.getItem("roles")?.toString() || sessionStorage.getItem("roles")?.toString() || "";
    this.authService.isLoggedIn().subscribe((data) => {
      this.isLoggedIn = data
    })
  }

  onLogoutCLicked() {
    this.data = {}
    this.usersServicesService.logout(this.data).subscribe((response) => {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/login"
    })
  }
}
