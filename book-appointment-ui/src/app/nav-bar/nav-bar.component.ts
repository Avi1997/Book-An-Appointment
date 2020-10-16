import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarIcon : string = "keyboard_arrow_down";
  constructor() { }

  ngOnInit(): void {
  }

dropDownButtonClick(){
  if(this.navbarIcon == "keyboard_arrow_down"){
    this.navbarIcon = "keyboard_arrow_up"
  }else{
    this.navbarIcon = "keyboard_arrow_down"
  }
}
}
