import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/doctor-home/appointment/interface/appointment';
import { AppointmentService } from 'src/app/doctor-home/appontment/appointment.service';
import { UserService } from 'src/app/site/user.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  newAppointment: Appointment;
  appointment: FormGroup;
  statusS = [{ key: "OPEN", value: "Open" }, { key: "CLOSED", value: "Close" }, { key: "CANCELLED", value: "Cancel" }];
  doctors:any[];
  successMsg=false;
  constructor(private appService:AppointmentService) { }

  ngOnInit(): void {
     this.appService.getAllDoctor().subscribe((res:any[])=>{
      this.doctors = res;
    });
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
   
  }
  addAppointment(appointmentDetail){
    
    this.newAppointment =  {
      app_date :appointmentDetail.value.date,
      app_time :appointmentDetail.value.time,
      doc_id : appointmentDetail.value.doctorDivision.doctor,
      patient_name :appointmentDetail.value.name,
      patient_email : appointmentDetail.value.emailId,
      patient_phone : appointmentDetail.value.contactNo,
      app_status : 'OPEN'
    }
    this.appService.bookAppointment(this.newAppointment).subscribe((response) =>{
      this.successMsg = true;
    },(error)=>{
      this.successMsg = false;
    });
  }

}
