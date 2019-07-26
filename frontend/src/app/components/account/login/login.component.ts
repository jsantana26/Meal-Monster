import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      ;
      if (data.success) {
        //this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Your are logged in!', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show('Incorrect email or password', { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/login']);
      }
    });
  }
}
