import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Doctor } from '../User';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  gender: any[];
  stateClick: boolean = false;
  stateEmpty: boolean = true;
  bloodGroupEmpty: boolean = true;
  signupForm: FormGroup;
  user: Doctor;
  checkpass: boolean =false;
  userPresent: boolean = false;
  successMsg: boolean = false;

  constructor(private userService: UserService, private router: Router) {
   
  }

  ngOnInit() {
    this.gender = this.userService.getGenders();
    this.user = {
      user_id: "",
    name: "",
    email: "",
    password: "",
    appointment_slot_time: "",
    day_start: "",
    day_end : "",
    }

    this.signupForm = new FormGroup({
      user_id: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),     
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),    
      confirmPassword: new FormControl('', [Validators.required]),
      genderDivision: new FormGroup({
        gender: new FormControl('')
      }),
      emailId: new FormControl('', [Validators.required, Validators.email])
    });
  }
  checkIfMatchingPasswords() {
    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
      this.checkpass = true;
    } else {
      this.checkpass = false;
    }
  }
  changeValue() {
    this.userPresent = false;
  }

  
  
  userAdd(signupForm) {
    this.user.name = signupForm.value.userName;
    this.user.password = signupForm.value.password;
    this.user.email = signupForm.value.emailId;

    this.userService.createUser(this.user).subscribe(response => {
      this.successMsg = true;
    }, (error) => {
      this.userPresent = true
    })
  }
}
