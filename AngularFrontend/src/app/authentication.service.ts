import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  baseUrl='http://localhost:8080/api/customers'
  constructor(private http:HttpClient) { }

  login(customer:any):Observable<any>
  {
    return this.http.post(`http://localhost:8080/api/customer`,customer)
  }

  adminlogIn(admin:any){
    return this.http.post(`http://localhost:8080/admin/login`,admin)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('admin')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    if(this.isAdminLoggedIn())
    sessionStorage.removeItem('admin')
    else
    sessionStorage.removeItem('username')
  }
  
  saveCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }
}
