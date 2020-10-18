import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/doctor-home/appointment/interface/appointment';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  newAppointment: Appointment;
  appointment: FormGroup;
  statusS = [{ key: "OPEN", value: "Open" }, { key: "CLOSED", value: "Close" }, { key: "CANCELLED", value: "Cancel" }];
  doctors = ["ONE","TWO","Thrre"];
  successMsg=false;
  constructor() { }

  ngOnInit(): void {
    this.appointment = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      doctorDivision: new FormGroup({
        doctor: new FormControl('', [Validators.required])
      }),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      contactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailId: new FormControl('', [Validators.required, Validators.email])
    });
    console.log(this.appointment)
  }
  addAppointment(appointmentDetail){

  }

}
