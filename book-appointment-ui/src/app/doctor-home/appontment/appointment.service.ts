import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appointment } from '../appointment/interface/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
   COUNTRIES: Appointment[] =  [ ];
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

    getAppontment(){
    return this.COUNTRIES;
    }
    bookAppointment(appointment){
      return this.http.post(this.baseUrl+"appointment/book",appointment);
    }
    getAllDoctor(){
      return this.http.get(this.baseUrl+"doc/doctors");
    }
}
