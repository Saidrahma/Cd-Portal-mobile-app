import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private authService : AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submitted");
    this.authService.login();
    
  }


}
