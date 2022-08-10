import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookings } from './bookings';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  savedBooking:Bookings|any
  baseURL="http://localhost:8080/bookings"
  static booked:Observable<number>[]|any;
  constructor(private http:HttpClient) { }
  
  static seat:number
  static jdate:Date
  static busNo:number

  static adminbus:Bus|any

  static booking:Bookings

 getBookings(){
   return this.http.get(`${this.baseURL}/get/${sessionStorage.getItem('username')}`);
 }

 getCancelledBookings(){
  return this.http.get(`${this.baseURL}/getCancelled/${sessionStorage.getItem('username')}`);
 }

 getUpcomingBookings(){
  return this.http.get(`${this.baseURL}/getUpcoming/${sessionStorage.getItem('username')}`);
 }

 getBooked(busNo:number):Observable<any>{
  //BookingService.booked = this.http.get(`${this.baseURL}/getbooked/1`) ;
  // return BookingService.booked;
  return this.http.get(`${this.baseURL}/getbooked/${busNo}/${BookingService.jdate}`) ;
 }

 saveBooking(booking:Bookings){
    this.savedBooking=booking
 }


 BookNew(booking:Bookings){
   
  this.http.post(`${this.baseURL}/create/${sessionStorage.getItem('username')}`,booking)
  .subscribe(
    data=>{
      BookingService.booked=data
      console.log(data)
    }
  )
  
  console.log(booking)
  alert('success')
 }

 cancelBooking(id:number){
  this.http.delete(`${this.baseURL}/cancel/${id}`)
  .subscribe(
    data=>
    console.log(data)
  )
 }
 

 getLatest(){
  return this.http.get(`${this.baseURL}/latest`);
  
 }
}
