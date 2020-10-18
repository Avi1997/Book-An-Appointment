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
 
  constructor(private http:HttpClient) {  
    this.baseUrl = environment.baseUrl;
    this.timeSlot = [ "10", "11", "12", "1", "2", "3", "4", "5","6","7","8","9"];
  }
  createUser(user) {
    return this.http.post(this.baseUrl+"user/signup", user);
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
