package com.example.krishna.models;

import java.util.Date;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")

public class Booking {
	

   // @Transient
    //public static final String SEQUENCE_NAME = "users_sequence";
	@Id
	private Long bookId;
	@Indexed(unique = true)
	private Customer customer;
	private String source;
	private String destination;
	public Date bookedDate;
	private Date journeyDate;
	private Long seat;
	private Long busNo;
	private Long price;
	private String status;
	
	
	public Long getSeat() {
		return seat;
	}
	public void setSeat(Long seat) {
		this.seat = seat;
	}
	public Long getBookId() {
		return bookId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public Date getBookedDate() {
		return bookedDate;
	}
	public void setBookedDate() {
		Date date= new Date();
		this.bookedDate = date;
	}
	
	
	
	public Date getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(Date journeyDate) {
		this.journeyDate = journeyDate;
	}
	public Long getBusNo() {
		return busNo;
	}
	public void setBusNo(Long busNo) {
		this.busNo = busNo;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	
}
