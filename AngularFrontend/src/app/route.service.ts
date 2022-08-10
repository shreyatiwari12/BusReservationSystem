import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  baseUrl="http://localhost:8080/Bus"
  constructor(
    private http:HttpClient
  ) { }

  getSources(){
    return this.http.get(`${this.baseUrl}/getsources`)
  }

  getDestinations(){
    return this.http.get(`${this.baseUrl}/getdestinations`)
  }

  deleteRoute(source:string,destination:string){
    return this.http.get(`${this.baseUrl}/deleteroute/${source}/${destination}`)
  }

  addRoute(source:string,destination:string){
    return this.http.get(`${this.baseUrl}/addroute/${source}/${destination}`)
  }
  
  
}
