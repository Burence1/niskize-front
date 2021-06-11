import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logoutservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.logoutservice.logout().subscribe(() => {
      // alert('Logout successfull');
    });
  }

}
