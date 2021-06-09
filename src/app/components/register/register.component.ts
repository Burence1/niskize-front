import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup;

constructor(private authservice: AuthService,private route: ActivatedRoute,private router: Router
  ) { }

  ngOnInit(): void {
    this.registerform = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.registerform.controls;
  }
  onSubmit() {
    const data = {
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value,
    };
    this.authservice.register(data).subscribe(
      (response) => {
        alert('Registration successful');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        alert('Registration not successful');

      }
    );

}
}