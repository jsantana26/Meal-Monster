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
    const user = {
      name: form.value.name,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    };

    // Register User
    this.auth.registerUser(user).subscribe(data => {
      console.log(data);
    });

  }
}
