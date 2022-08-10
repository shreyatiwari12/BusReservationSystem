package com.example.krishna.models;

	import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.Field;



import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
	
@Document(collection = "customer")
public class Customer {
	
	@Id
	private String email;
	@Indexed(unique = true)
	private String gender;
	private String fname;
	private String lname;
	private String mobile;
	private String password;
	private String street;
	private Long pincode;
	private String city;
	private String state;
	private List<Booking> bookings;

	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {

		Base64.Encoder encoder = Base64.getEncoder();  // encrypt password in database field
        String normalString = password;
        String encodedString = encoder.encodeToString(normalString.getBytes(StandardCharsets.UTF_8) );
        this.password = encodedString;
        }

	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}

	public Long getPincode() {
		return pincode;
	}
	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}
	
	public void addBooking(Booking booking) {
		this.bookings.add(booking);
	}

	
	
}
