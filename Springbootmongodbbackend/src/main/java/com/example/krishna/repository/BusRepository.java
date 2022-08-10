package com.example.krishna.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.krishna.models.Bus;


public interface BusRepository extends MongoRepository<Bus , Long> {
	
	
	@Query(value = "{source : ?0, destination : ?1}")
	List<Bus> getBuses( String source, String destination);
	
	@Query("{'busNo' : ?0}")
	Bus findByBusNo(long busno);
	
	
	@Query(value = "{source : ?0, destination : ?1}")
	Bus findRoute(String source, String destination);
	
}
