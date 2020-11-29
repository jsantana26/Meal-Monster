import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BaseURI = 'http://localhost:63631/api'

  constructor(private fb: FormBuilder, private http:HttpClient) {
   }

  formModel = this.fb.group({
    Name: ['',Validators.required],
    Email: ['',Validators.email],
    UserName: ['',Validators.required],
    Passwords: this.fb.group({
      Password: ['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword: ['',Validators.required]
    },{validator : this.comparePasswords})
  });

  comparePasswords(fb:FormGroup){
    let confirmPasswordControl = fb.get('ConfirmPassword');
    if(confirmPasswordControl.errors == null || 'passwordMismatch' in confirmPasswordControl.errors){
      if (fb.get('Password').value != confirmPasswordControl.value){
        confirmPasswordControl.setErrors({ passwordMismatch: true})
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  register(){
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.Name,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI+'/ApplicationUser/Register', body);
  }
}
