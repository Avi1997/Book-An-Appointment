import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from 'src/app/site/authenticate.service';
import { environment } from 'src/environments/environment';
import { Appointment } from '../appointment/interface/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
   COUNTRIES: Appointment[] =  [ ];
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient,private authenticationService:AuthenticateService) { }

    getAppontment(){
      let token = "Bearer " + this.authenticationService.getToken();
      const httpOption = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': token
        })
      };
      
      return this.http.get(this.baseUrl + "doc/appointment/"+this.authenticationService.getdocId(),httpOption);
    }
    getByDateAppontment(date){
      let token = "Bearer " + this.authenticationService.getToken();
      const httpOption = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': token
        })
      };
      
      return this.http.get(this.baseUrl + "doc/appointment/date"+this.authenticationService.getdocId()+"/"+date,httpOption);
    }
    bookAppointment(appointment){
      return this.http.post(this.baseUrl+"appointment/book",appointment);
    }
    getAllDoctor(){
      return this.http.get(this.baseUrl+"doc/doctors");
    }

    changeAppointmentStatus(id,status,app_id){
      let token = "Bearer " + this.authenticationService.getToken();
      const httpOption = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': token
        })
      };
      const data = {
        doc_id : id,
        status : status,
        app_id : app_id
      } 
      return this.http.post(this.baseUrl + "doc/appointment/status",data,httpOption);
    }
}
