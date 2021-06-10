import { AuthService } from './../../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  isAuthenticated: boolean = false;
  currentUser:undefined

  constructor(private loginservice: AuthService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get form() {
    return this.loginform.controls;
  }

  onSubmit() {
    const data = {
      username: this.form.username.value,
      password: this.form.password.value,
    };
    this.loginservice.login(data).subscribe(
      (response) => {
        // this.toastr.success('Login successfull');
        this.router.navigate(['home']);
        this.isAuthenticated = true;
        console.log(data);
      },
      (error) => {
        alert('Login unsuccessfull');
      }
    );
  }
}
