import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from './bus';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  static buses:Observable<Bus>[]|any;
  // static jdate:Date;
  baseUrl="http://localhost:8080/Bus"
  savedBus:Bus|any
  constructor(private http:HttpClient) { }

  

  createBus(checkbus:Object){
    
    this.http.post(`${this.baseUrl}/create`,checkbus)
  }
  

  fetchBuses(checkbus:Object){
   BusService.buses= this.http.post(`${this.baseUrl}/getAllBuses`,checkbus)
  }


  getBuses(){
    console.log('info')
    console.log('in get')
    console.log(BusService.buses)
    return BusService.buses;

  }

  addBus(newbus:Bus){
    this.http.post(`${this.baseUrl}/create`,newbus)
    .subscribe(
      data=>
      console.log(data)
    )
  }

}
