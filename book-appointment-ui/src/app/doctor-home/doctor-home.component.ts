import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../site/authenticate.service';
import { AppointmentService } from './appontment/appointment.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  user:string;
  numberOf =0;
  constructor(private authService:AuthenticateService,private appointmentS:AppointmentService) { }
  
  ngOnInit(): void {
   
     this.appointmentS.getAppontment().subscribe( (res:any[]) => {
      this.numberOf = res.length;
    })
  }
  isLogin(){
    return this.authService.islogin();
  }

}
