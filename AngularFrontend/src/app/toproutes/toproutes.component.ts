import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { Route } from '../route';

@Component({
  selector: 'app-toproutes',
  templateUrl: './toproutes.component.html',
  styleUrls: ['./toproutes.component.css']
})
export class ToproutesComponent implements OnInit {

  routes:Observable<Route>|any
  constructor(
    private adminservice:AdminService
  ) { }

  ngOnInit(): void {
    this.adminservice.getTopRoutes()
    .subscribe(
      data=>{
        console.log(data)
        this.routes=data
      }
    )
  }

}
