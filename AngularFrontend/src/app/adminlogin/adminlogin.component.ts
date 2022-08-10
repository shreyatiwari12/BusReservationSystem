import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string | any;
  loginSuccess = false;


  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    
    let admin={
      "email":this.username,
      "password":this.password
    }

    console.log(this.username)
    console.log(this.password)
    this.loginService.adminlogIn(admin).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['admindash']);
        sessionStorage.setItem('admin', this.username)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
  }
}
