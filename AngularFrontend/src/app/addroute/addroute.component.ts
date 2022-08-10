import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {

  start:string|any;
  end:string|any;


  constructor(
    private routeservice:RouteService
  ) { }

  ngOnInit(): void {
    
  }


  onSubmit(){
this.routeservice.addRoute(this.start,this.end)
.subscribe(
  data=>
  console.log(data)
  )
  alert("Added Successfully")
  }


}
