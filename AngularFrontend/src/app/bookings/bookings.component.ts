import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from '../booking.service';
import { Bookings } from '../bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Observable<Bookings[]> | any;
  upcomingBookings: Observable<Bookings[]> | any;
  cancelledBookings: Observable<Bookings[]> | any;
  
  constructor(private bookingService:BookingService, private router:Router ) {
    

   }
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.bookings = this.bookingService.getBookings();
    this.cancelledBookings=this.bookingService.getCancelledBookings();
    this.upcomingBookings=this.bookingService.getUpcomingBookings();
  }

  cancelBooking(id:number){
    this.bookingService.cancelBooking(id)
    window.location.reload();
  }

  print(booking:Bookings){
    BookingService.booking=booking
    this.router.navigate(['receipt'])
  }

}
