import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { Bus } from '../bus';

@Component({
  selector: 'app-deletebus',
  templateUrl: './deletebus.component.html',
  styleUrls: ['./deletebus.component.css']
})
export class DeletebusComponent implements OnInit {
  buses:Observable<Bus>[]|any;
  constructor(
    private adminservice:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.adminservice.getBuses()
    .subscribe(
      data=>{
        console.log(data)
        this.buses=data
      }
    )
  }

  deleteBus(id:number){
    this.adminservice.deletBus(id)
    // window.location.reload()
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['deletebus'])
    
  }

}
