import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';
import { Customeraddress } from '../customeraddress';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup | any;
    submitted = false;
    gender:string|any;
    
    customer : Customeraddress = new Customeraddress();

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
      mobile:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
      state: ['',[Validators.required]],
  });
  }

  get f() { return this.registerForm.controls; }


  CustomerAddress(): void {
    this.submitted = false;
    this.customer= new Customeraddress();
  }

  onSubmit() {
    alert(this.gender)
    this.customer.gender=this.gender
    this.submitted = true;
    this.customer=this.registerForm.value;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert("second hello");
    
    this.save();
  }


  save() {
    this.authenticationService.saveCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer=new Customeraddress();
    // this.address=new Address();
    
    this.router.navigate(['/login']);
    }

  
}
