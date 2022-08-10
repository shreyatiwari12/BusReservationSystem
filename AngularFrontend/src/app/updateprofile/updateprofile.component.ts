import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CustomerService } from '../customer.service';
import { Customeraddress } from '../customeraddress';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;

  customer: Customeraddress = new Customeraddress();

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private customerservice:CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],

      mobile: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    this.customer = this.registerForm.value;
    console.log(this.customer)
    if (this.registerForm.invalid) {
      return;
    }

    this.customerservice.updateDetails(this.customer)
    
  }

}