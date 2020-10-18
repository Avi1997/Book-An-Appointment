import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  users: any;
  userIsThere: boolean = true;
  infoFlag: boolean = false;
  constructor(private router: Router, private actRouter: ActivatedRoute ,private authenticationService:AuthenticateService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required])
    });
    this.infoFlag = (this.actRouter.snapshot.paramMap.get('info-flag') == "false");
  }
  loginAuthenticate(loginForm) {
    this.infoFlag = false;
    console.log(loginForm)
   /*this.authenticationService.authenticate(loginForm.value.username,loginForm.value.password).subscribe((response)=>{
      this.authenticationService.setToken(response.token);
      this.authenticationService.setRole(response.role);
      this.authenticationService.setLogedInUser(loginForm.value.username)
      this.authenticationService.login();
      this.userIsThere = true;
      this.authenticationService.setLogedInUser(loginForm.value.username);
      this.router.navigate(['/doc-home']);
    },(error)=>{
      if (error.status == 401) {
        this.userIsThere = false;
        this.authenticationService.setLogedInUser("");
      }
    });*/
  }
}
