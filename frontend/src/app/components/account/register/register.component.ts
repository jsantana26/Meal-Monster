import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public service: UserService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res:any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.flashMessage.show('User Account Registered', {cssClass: 'alert-success', timeout: 3000});
        } else {
          res.errors.forEach(element => {
            switch(element.code){
              case 'DupicateUserName':

                break;
              
              default:

                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
