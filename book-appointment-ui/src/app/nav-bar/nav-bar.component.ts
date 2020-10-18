import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../site/authenticate.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarIcon : string = "keyboard_arrow_down";
  login=false;
  constructor(private auth:AuthenticateService) { }

  ngOnInit(): void {
    this.login = this.auth.islogin();
  }

dropDownButtonClick(){
  if(this.navbarIcon == "keyboard_arrow_down"){
    this.navbarIcon = "keyboard_arrow_up"
  }else{
    this.navbarIcon = "keyboard_arrow_down"
  }
}
}
