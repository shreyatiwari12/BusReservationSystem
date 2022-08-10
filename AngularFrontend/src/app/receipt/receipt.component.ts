import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Bookings } from '../bookings';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  booking:Bookings=BookingService.booking
user:Customer|any;
  constructor(
    private customerservice:CustomerService
  ) { }

  ngOnInit(): void {
    this.customerservice.getCustomerDetails().subscribe(data=>{
      console.log(data);
      this.user=data;
    });
  }

}
