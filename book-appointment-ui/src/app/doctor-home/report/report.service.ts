import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from 'src/app/site/authenticate.service';
import { environment } from 'src/environments/environment';
import { Report } from './Interface/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  baseUrl = environment.baseUrl;
  constructor(private authenticationService:AuthenticateService,private http:HttpClient) { }

  
  getAllReport(){
    let token = "Bearer " + this.authenticationService.getToken();
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    
    return this.http.get(this.baseUrl + "doc/appointment/"+this.authenticationService.getdocId(),httpOption);
  }
}
