import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-adminbussearch',
  templateUrl: './adminbussearch.component.html',
  styleUrls: ['./adminbussearch.component.css']
})
export class AdminbussearchComponent implements OnInit {
  checkbus = new Bus();
  start:string='';
  end:string='';

  sources:Observable<string>|any;
  destinations:Observable<string>|any;
  constructor(
    private busservice:BusService,
    private router:Router,
    private routeservice:RouteService
  ) { }

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
  AdminService.bus.source=this.start
  AdminService.bus.destination=this.end
  this.router.navigate(['deletebus'])
}
}
