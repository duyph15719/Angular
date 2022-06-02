import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from "src/app/models/User";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: IUser = {
    name: '',
    email: '',
    password: '',
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private routes: Router, ) { }

  ngOnInit(): void {
  }
  onSignIn() {
    this.authService.Signin(this.user).subscribe(res => {
      localStorage.setItem('user', JSON.stringify(res));
      setTimeout(() => {
        this.routes.navigate(['']);
      }, 2000)
    });
  }

}

