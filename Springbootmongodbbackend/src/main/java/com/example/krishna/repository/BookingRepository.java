package com.example.krishna.repository;

import java.util.List;



import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.krishna.models.Booking;

import com.example.krishna.models.Customer;

public interface BookingRepository extends MongoRepository<Booking, Long> {
	
	

	
	@Query("{'busNo' : ?0},{status='booked'}")
	List<Booking> getBookedSeats(Long busId);
	
	
	
	@Query("{'bookedDate' : ?0}")
	public List<Booking> getLatest();
}
