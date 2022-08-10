package com.example.krishna.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.krishna.models.Customer;



public interface UserRepository extends MongoRepository<Customer, String>{
	
	@Query("{'email' : ?0}")
	public Customer findByEmail(String email);
	
	/*@Query(fields = "{ 'Customer.id' : 1,'Customer.email' : 1,'Customer.fname' : 1,'Customer.lname' : 1,'Customer.mobile' : 1,'Customer.password' : 1,'Customer.gender' : 1,'Customer.address.street' : 1,'Customer.address.pincode' : 1,'Customer.address.city' : 1,'Customer.address.state' : 1}")
	 List<Customer> fetchCustomerInnerJoin();*/
	

	@Query(value = "{email : ?0}",fields = "{ 'id' : 1,'email' : 1,'fname' : 1,'lname' : 1,'mobile' : 1,'password' : 1,'gender' : 1,'street' : 1,'pincode' : 1,'city' : 1,'state' : 1}")
	 Customer getCustomer(String email);

	/*@Query(fields = "{ 'Customer.id' : 1,'Customer.email' : 1,'Customer.fname' : 1,'Customer.lname' : 1,'Customer.mobile' : 1,'Customer.password' : 1,'Customer.gender' : 1,'Customer.address.street' : 1,'Customer.address.pincode' : 1,'Customer.address.city' : 1,'Customer.address.state' : 1}")
	 List<Customer> getCustomers();
	
	/*
	@Query(value = "{customer_id : ?0},{bookid : ?1}",count = true)
	Long getBookingsCount(Long custId); 
	*/
	
	}