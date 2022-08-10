import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingService } from '../booking.service';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  buses:Observable<Bus>[]|any;
  constructor(private busService:BusService,private router:Router) { }

  ngOnInit(): void {
    this.reload();
  }

  reload():void{
    this.buses=this.busService.getBuses()
    console.log(this.buses)
  }

  selectBus(bus:Bus){
      // this.busService.saveBus(bus)
      this.busService.savedBus=bus;
      BookingService.busNo=bus.busNo
      
      this.router.navigate(['newticket',bus.busNo])
  }
}
