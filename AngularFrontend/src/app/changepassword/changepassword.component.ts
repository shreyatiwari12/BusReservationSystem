import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  visible = 'hidden';
  curvisible='hidden'
  newpass = '';
  confirmpass = '';
  username = sessionStorage.getItem('username')
  password = ''

  constructor(private router: Router, private loginService: AuthenticationService,
    private customerservice: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    let customer = {
      "email": sessionStorage.getItem('username'),
      "password": this.password
    }

    this.loginService.login(customer).subscribe((response) => {
      console.log(response);
      if (response) {

        if (this.newpass == this.confirmpass) {
          this.customerservice.changePassword(this.newpass)
          this.loginService.logOut();
          this.router.navigate(['login']);
        }
        else {
          this.visible = 'visible';

        }

      }
      else{
        alert(this.password)
        this.curvisible='visible';
      }
    })

  }
}
