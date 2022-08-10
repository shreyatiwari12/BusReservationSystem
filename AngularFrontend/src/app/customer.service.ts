import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customeraddress } from './customeraddress';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  static user:Customer;
  baseUrl="http://localhost:8080/api"
  
  constructor(private http:HttpClient) { }

  getCustomerDetails(){
    
      return this.http.get(`${this.baseUrl}/getcustomer/${sessionStorage.getItem('username')}`);
  }

  changePassword(pass:string){
     this.http.post(`${this.baseUrl}/changepass/${sessionStorage.getItem('username')}/${pass}`,'sfv')
     .subscribe(
       data=>
       console.log(data)
     )
  }

  updateDetails(customer:Customeraddress){
    this.http.put(`${this.baseUrl}/update/${sessionStorage.getItem('username')}`,customer)
    .subscribe(
      data=>
      console.log(data)
    )
    
    
  }

 
}
