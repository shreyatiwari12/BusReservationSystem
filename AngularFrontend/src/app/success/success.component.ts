import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Bookings } from '../bookings';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {


  user:Customer|any;
  booking:Bookings|any
  constructor(
    private customerservice:CustomerService,
    private bookingservice:BookingService
  ) { }

  ngOnInit(): void {
     this.customerservice.getCustomerDetails().subscribe(data=>{
      console.log(data);
      this.user=data;
    });

    this.bookingservice.getLatest()
    .subscribe(
      data=>
      {
        console.log(data)
        this.booking=data
      }
    )

  }

}
