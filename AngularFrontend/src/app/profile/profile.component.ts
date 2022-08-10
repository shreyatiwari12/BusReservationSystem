import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user:Customer|any;

  ngOnInit(): void {
    this.load();
    
  }

  constructor(private router:Router,private customerservice:CustomerService){}

  load(){
    this.user= this.customerservice.getCustomerDetails().subscribe(data=>{
      console.log(data);
      this.user=data;
    });
    CustomerService.user=this.user
  }

  
}
