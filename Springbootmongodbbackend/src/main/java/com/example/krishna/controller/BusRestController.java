package com.example.krishna.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import com.example.krishna.models.Bus;

import com.example.krishna.repository.BusRepository;




@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/Bus")
@RestController
public class BusRestController {

	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	private BusRepository busrepo;
	
	@PostMapping("/create")
	public void createBus(@RequestBody Bus bus) {
		
		busrepo.save(bus);
	}
	
	@PostMapping("/getAllBuses")
	public List<Bus> getAllBus(@RequestBody Bus bus) {
		//return this.busrepo.findAll();
		System.out.println(bus.getSource()+" "+bus.getDestination());
		
		List<Bus> buses = busrepo.getBuses(bus.getSource(),bus.getDestination());
		System.out.println("buses info fetched");
		System.out.println(buses);
			return buses;
	}
	
	@GetMapping("/getBuses/{source}/{destination}")
	public List<Bus> getBusDetails(@PathVariable String source , @PathVariable String destination) {
		System.out.println("Bus details requested");
		
	//List<Bus> buses = busrepo.getBuses(source,destination);
	//System.out.println("buses info fetched");
	//System.out.println(buses);
		return busrepo.getBuses(source, destination);
		
	}
	@GetMapping("/getsources")
	public List<String> getSources(){
		List<String> sour=mongoTemplate.query(Bus.class).distinct("source").as(String.class).all();
		return sour;
	}
	
	@GetMapping("/getdestinations")
	public List<String> getDestinations(){
		List<String> sour=mongoTemplate.query(Bus.class).distinct("destination").as(String.class).all();
		return sour;
	}
}
