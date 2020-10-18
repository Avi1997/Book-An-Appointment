import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../site/authenticate.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  user:string;
  constructor(private authService:AuthenticateService) { }
  
  ngOnInit(): void {
    this.user = this.authService.getLogedInUser();
  }

}
