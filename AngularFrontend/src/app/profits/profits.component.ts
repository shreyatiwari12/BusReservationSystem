import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css']
})
export class ProfitsComponent implements OnInit {

    LMprofits:number|any
    LMB:number|any
    LWprofits:number|any
    LWB:number|any
  constructor(
    private adminservice:AdminService
  ) { }

  ngOnInit(): void {
    this.adminservice.getProfits()
    .subscribe(
      data=>{
        console.log(data)
        this.LMprofits=data
      })

      this.adminservice.getLMB()
    .subscribe(
      data=>{
        console.log(data)
        this.LMB=data
      }
    )

    this.adminservice.getLWProfits()
    .subscribe(
      data=>{
        console.log(data)
        this.LWprofits=data
      })

      this.adminservice.getLWB()
    .subscribe(
      data=>{
        console.log(data)
        this.LWB=data
      }
    )

  }

}
