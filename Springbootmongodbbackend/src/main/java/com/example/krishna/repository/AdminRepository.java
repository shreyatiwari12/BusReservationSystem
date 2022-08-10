package com.example.krishna.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import com.example.krishna.models.Admin;


public interface AdminRepository extends MongoRepository<Admin, Long> {
	
	@Query("{'email' : ?0}")
	public Admin findByEmail(String email);
	

}
