import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { Customeraddress } from '../customeraddress';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {

  inactive:Observable<Customeraddress>|any;

  constructor(
    private adminservice:AdminService
  ) { }

  ngOnInit(): void {

    this.inactive=this.adminservice.getInactive()
    .subscribe(
      data=>
      {
        console.log(data)
        this.inactive=data
      }
    )

  }

}
