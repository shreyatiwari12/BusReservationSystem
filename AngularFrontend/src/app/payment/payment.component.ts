import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Bookings } from '../bookings';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  newBooking:Bookings=new Bookings();
  bus:Bus|any

  constructor(private busService:BusService,
    private bookingservice:BookingService,
    private router:Router
    ) { }

  ngOnInit(): void {    

  }

  book(){
    
    this.newBooking.seat=BookingService.seat
    this.newBooking.busNo=BookingService.busNo
   
    this.newBooking.journeyDate=BookingService.jdate
    this.newBooking.status='booked'
    this.bookingservice.BookNew(this.newBooking)
    console.log(this.newBooking)
    this.router.navigate(['..','success'])
    
  }
}
