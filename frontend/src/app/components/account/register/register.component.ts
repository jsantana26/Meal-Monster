import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/UserModel'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userModel = new User(form.value.email, form.value.fullName, form.value.username);
    const password = form.value.password;

    this.auth.registerUser(this.userModel, password);
  }
}
