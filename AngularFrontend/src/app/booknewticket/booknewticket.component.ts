  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { map, Observable } from 'rxjs';
  import { BookingService } from '../booking.service';
import { Bookings } from '../bookings';
import { Bus } from '../bus';
  import { BusService } from '../bus.service';
  @Component({
    selector: 'app-booknewticket',
    templateUrl: './booknewticket.component.html',
    styleUrls: ['./booknewticket.component.css']
  })
  export class BooknewticketComponent implements OnInit {

    seats:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

    static booked=new Array();
    
    clr='red';
    seat=0
    id: any;
    
    constructor(private route: ActivatedRoute,private busService:BusService,
      private bookingservice:BookingService,private router:Router) { }

    ngOnInit(): void {
      this.id=this.route.snapshot.params['id']
      this.reload();
    }

    reload(){
      this.bookingservice.getBooked(this.id)
      .subscribe(info=>{
        console.log(info);
    BooknewticketComponent.booked=info
      });
    }

    check(st:number){
      if(BooknewticketComponent.booked.length==0)
      return;
      for(let s of BooknewticketComponent.booked)
      {
        if(s==st){
        return true;}
    }
    return;
  }

  color(st:number){
    if(BooknewticketComponent.booked.length==0)
      return 'lightpink';
      for(let s of BooknewticketComponent.booked)
      {
        if(s==st){
        return 'green';}
    }
    return 'lightpink';
  }

  onSelect(st:number){
    this.seat=st;
  }

  onSubmit(){
    console.log(this.seat)
    
    // this.bookingservice.saveSeat(this.seat)
    BookingService.seat=this.seat
    
    this.router.navigate(['payment'])
  }

}
