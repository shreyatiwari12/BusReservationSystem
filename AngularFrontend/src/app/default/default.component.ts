import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { BookingService } from '../booking.service';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
          checkbus = new Bus();
          start:string='';
          end:string='';
          startDate:Date|any;
          endDate:Date|any;
          journeyDate:Date|any;

          sources:Observable<string>|any;
          destinations:Observable<string>|any;

  constructor(loginService:AuthenticationService,private router:Router,private busService:BusService,
    private routeservice:RouteService) {

  }
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

  onSubmit(){
    this.checkbus.source=this.start;
    this.checkbus.destination=this.end;
    // this.checkbus.startDate=this.startDate;
    // this.checkbus.endDate=this.endDate;
    this.checkbus.journeyDate=this.journeyDate;
    BookingService.jdate=this.journeyDate
    this.busService.fetchBuses(this.checkbus);
    // this.busService.saveJourneyDate(this.journeyDate)
    this.router.navigate(['..','search']);
  }

}
