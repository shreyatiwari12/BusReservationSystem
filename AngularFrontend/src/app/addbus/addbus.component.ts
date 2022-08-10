import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { RouteService } from '../route.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
  start=''
  end=''
  busNo=''
  sources:Observable<string>|any;
  destinations:Observable<string>|any;
  
  departure:string|any
  arrival:string|any
  price:number|any
  constructor(
    private busservice:BusService,
    private router:Router,
    private routeservice:RouteService
  ) { }
  newbus:Bus=new Bus();
  
  ngOnInit(): void {

    this.routeservice.getSources()
    .subscribe(
      data=>
      {
        console.log(data)
        this.sources=data
      }
    )

    this.routeservice.getDestinations()
    .subscribe(data=>{
      console.log(data)
      this.destinations=data
    })
  }
  
  addBus(){
    this.newbus.source=this.start
    this.newbus.destination=this.end
    this.newbus.busNo=this.busNo
    this.newbus.departure=this.departure
    this.newbus.arrival=this.arrival
    this.newbus.price=this.price
    console.log(this.newbus)
    this.busservice.addBus(this.newbus)
    alert("Added Successfully")
    this.router.navigate(['admindashboard'])
  }

}
