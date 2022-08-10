package com.example.krishna.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.time.*;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.krishna.models.Booking;
import com.example.krishna.models.Bus;
import com.example.krishna.models.Customer;

import com.example.krishna.repository.BookingRepository;
import com.example.krishna.repository.BusRepository;

import com.example.krishna.repository.UserRepository;

@RestController
@RequestMapping(value="/bookings")
@CrossOrigin(origins="http://localhost:4200")
public class BookingRestController {
	
	@Autowired
	private BookingRepository brepo;
	
	@Autowired
	private UserRepository urepo;
	
	@Autowired
	BusRepository busrepo;
	
	@GetMapping("/create/{email}")
	public Booking newBooking(@RequestBody Booking newbooking,@PathVariable String email) {
		
		System.out.println("new booking received");
		
		Customer cust = urepo.findByEmail(email);
		
		List<Booking> bookings;
		
		
		if(cust.getBookings()!=null) {
					bookings= cust.getBookings();
			}
			else {
				bookings = new ArrayList<Booking>();
			}
		
		Long busno=newbooking.getBusNo();
		
		Bus bus=busrepo.findByBusNo(busno);
		
		newbooking.setPrice(bus.getPrice());
		newbooking.setSource(bus.getSource());
		newbooking.setDestination(bus.getDestination());
		newbooking.setStatus("booked");
		
		newbooking.setCustomer(cust);
		newbooking.bookedDate=new Date();
		brepo.save(newbooking);
		bookings.add(newbooking);
			
		cust.setBookings(bookings);
		urepo.save(cust);
		return newbooking;	
	}
	
	
	@GetMapping("/getUpcoming/{email}")
	public List<Bookings> getUBookings(@PathVariable String email){
		
		Customer cust = urepo.findByEmail(email);
		
		Date date=new Date();
		
		return brepo.getUpcomingBookings(cust , date);
		
	}
	
	@GetMapping("/getCancelled/{email}")
	public List<BookingsGet> getCBookings(@PathVariable String email){
		
		Customer cust = urepo.findByEmail(email);
		  
		return brepo.getCancelledBookings(cust);
		
	}
	
	@GetMapping("/get/{email}")
	public List<BookingsGet> getBookings(@PathVariable String email){
		
		Customer cust = urepo.findByEmail(email);
		Date date=new Date();
		return brepo.getBookings(cust,date);
		
	}
	
	
	@GetMapping("/getbooked/{busId}/{jdate}")
	public List<Long> getBooked(@PathVariable Long busId, @PathVariable String jdate) throws ParseException{
		
		System.out.println(jdate+"isnlksdnckd");
		
		
		System.out.println(jdate);
		List<Booking> booked = brepo.getBookedSeats(busId);
		List<Long> bookedSeats = new ArrayList<Long>();
		for(Booking b:booked) {
			System.out.println(b.getJourneyDate());
			DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			String date=formatter.format(b.getJourneyDate());
//			String fdate = date.substring(0,10);
//			System.out.println("fdate"+fdate);
			
			if(jdate.equals(date))
				bookedSeats.add(b.getSeat());
			
		}
		
		return bookedSeats;
		}
		
		
		
	@DeleteMapping("/cancel/{id}")
	public void cancelBooking(@PathVariable Long id) {
		
		String source=brepo.getSource(id);
		String dest=brepo.getDestination(id);
			
	Routes route=rrepo.findRoute(source, dest);
	route.setUseCount(route.getUseCount()-1L);
	rrepo.save(route);
		
		Booking book = brepo.getBookById(id);
		book.setStatus("cancelled");
		brepo.save(book);
		
	}
	
	@GetMapping("/latest")
	public Booking getLatest() {
		List<Booking> bookings = brepo.getLatest();
		return bookings.get(0);
	}
	
		
}
