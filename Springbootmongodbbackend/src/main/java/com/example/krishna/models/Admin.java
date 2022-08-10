package com.example.krishna.models;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


public class Admin {
	
	@Id
	private Long id;
	@Indexed(unique = true)
	private String email;
	private String password;
	private String fname;
	private String lname;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	
	
	
}
