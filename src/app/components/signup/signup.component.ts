import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser} from "src/app/models/User";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: IUser = {
    name: "",
    email: "",
    password: "",
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }
  onSubmit() {

    this.authService.Signup(this.user).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/signin');
      }, 2000)
    });
  }
}
