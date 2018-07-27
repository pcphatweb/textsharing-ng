import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextsharingService } from '../../service/textsharing.service';
import { error } from 'util';

@Component({
  selector: 'app-container-register',
  templateUrl: './container-register.component.html',
  styleUrls: ['./container-register.component.css']
})
export class ContainerRegisterComponent implements OnInit {

  title = 'Register';
  registerForm: boolean = true;

  styleStatus: {} = {"color":"black"};

  constructor(private textSharingService: TextsharingService) { }

  ngOnInit() {
  }

  @ViewChild('registerPassword') inputPassword: ElementRef;
  @ViewChild('registerConfirmPassword') inputConfirmPassword: ElementRef;
  @ViewChild('registerEmail') inputEmail: ElementRef;

  onClickRegister(username, password, confirmpassword, email){
    if(username == "" || password == "" || confirmpassword == "" || email == "") {

      alert("The input field can't be empty");
    } else {

      let isEmail = function check(email: string): boolean
      {
        let regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let test = regexp.test(email);
        return test;
      }

      if (password.length < 5) {
        
        alert("The Password field must be at least 5 characters in length.");
        this.inputPassword.nativeElement.focus();

      } else if ( password !== confirmpassword ) {

        alert("The Password field does not match the Confirm Password field.");
        this.inputConfirmPassword.nativeElement.focus();

      } else if ( isEmail(email) == false ) {

        alert("The Email field must contain a valid email address.");
        this.inputEmail.nativeElement.focus();

      } else {

        let registerFormData: {} = {
          "username" : username,
          "password" : password,
          "email"    : email
        };

        this.textSharingService.addGuest(registerFormData).subscribe((data) => 
          {
            if(data.status == 'available') {

              this.title = 'Available Username';
              this.styleStatus = {"color":"red"};

            } else {

              this.title = 'Register Success';
              this.styleStatus = {"color":"green"};
              this.registerForm = false;

            }
          }
          , (error) => 
          {console.log(error)});

      }
    }

    return false;
  }

}
