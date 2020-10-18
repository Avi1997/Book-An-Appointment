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
      appointment_slot_time: new FormControl('',[Validators.required]),
      day_start : new FormControl('',[Validators.required]),
      day_end : new FormControl('',[Validators.required]),
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
    console.log(signupForm)
    this.user.name = signupForm.value.name;
    this.user.password = signupForm.value.password;
    this.user.user_id = signupForm.value.user_id;
    this.user.email = signupForm.value.emailId;
    this.user.day_start = signupForm.value.day_start;
    this.user.day_end = signupForm.value.day_end;
    this.user.appointment_slot_time = signupForm.value.appointment_slot_time;

    this.userService.createUser(this.user).subscribe(response => {
      this.successMsg = true;
    }, (error) => {
      this.userPresent = true
    })
  }
}
