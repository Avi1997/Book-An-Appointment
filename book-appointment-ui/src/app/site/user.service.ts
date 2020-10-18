import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string;
  private gender: string[];
  private bloodGroup: string[];
  private timeSlot: string[];
 

  createUser(user) {
    let usernew: User = user;
    return null;//this.httpClient.post(this.baseUrl+"/authentication-service/blood-bank/users", usernew);
  }
 
  
  constructor(private http:HttpClient) {
    this.gender = ["Male", "Female"];
    
    
    this.timeSlot = [ "10", "11", "12", "1", "2", "3", "4", "5","6","7","8","9"];
  }

  getGenders() {
    return this.gender;
  }

  getBloodGroups() {
    return this.bloodGroup;
  }

  getTimeSlot() {
    return this.timeSlot;
  }
}
