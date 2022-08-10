import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-deleteroute',
  templateUrl: './deleteroute.component.html',
  styleUrls: ['./deleteroute.component.css']
})
export class DeleterouteComponent implements OnInit {

  start:string|any;
  end:string|any;

  sources:Observable<string>|any;
  destinations:Observable<string>|any;
  constructor(
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
this.routeservice.deleteRoute(this.start,this.end)
.subscribe(
  data=>
  console.log(data)
)

alert("Deleted Successfully")
  }
}
