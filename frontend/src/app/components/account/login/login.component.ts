import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      (res:any) =>{
        localStorage.setItem('token', res.token);
        this.flashMessage.show('Your are logged in!', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigateByUrl('/');
      },
      err => {
        if(err.status == 400){
          this.flashMessage.show("Incorrect email or password", { cssClass: 'alert-danger', timeout: 3000 })
        }
      }
    )
  }
}
