import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './bus';
import { BusService } from './bus.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  static bus=new Bus()

  baseUrl="http://localhost:8080/admin"
  
  constructor(
    private http:HttpClient,
    private busservice:BusService
  ) { }

  getInactive(){
     return this.http.get(`${this.baseUrl}/inactive`)
  }

  getTopRoutes(){
    return this.http.get(`${this.baseUrl}/top`)
  }

  getProfits(){
    return this.http.get(`${this.baseUrl}/LMprofits`)
  }

  getLMB(){
    return this.http.get(`${this.baseUrl}/LMB`)
  }

  getLWProfits(){
    return this.http.get(`${this.baseUrl}/LWprofits`)
  }

  getLWB(){
    return this.http.get(`${this.baseUrl}/LWB`)
  }

  saveBus(bus:Bus){
    AdminService.bus=bus
  }

  getBuses(){
    return this.http.post(`${this.busservice.baseUrl}/getAllBuses`,AdminService.bus)
    
  }

  deletBus(id:number){
     this.http.get(`${this.baseUrl}/delete/${id}`)
     .subscribe(data=>
      console.log(data))
  }


}
