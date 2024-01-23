package com.sunil.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunil.www.model.HomeModel;
import com.sunil.www.service.HomeService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class HomeController
{
	@Autowired
	HomeService serv;
	
	@GetMapping("/fetch")
	public List<HomeModel> getDetails()
	{
		return serv.getDetails();
	}
	@PostMapping("/fetch")
	public HomeModel addDetails(@RequestBody HomeModel mod)
	{
		return serv.addDetails(mod);
	}
	@GetMapping("/fetch/{id}")
	public HomeModel fetchById(@PathVariable Long id)
	{
		return serv.fetchById(id);
	}
	@PutMapping("/fetch/{id}")
	public ResponseEntity<HomeModel> update(@PathVariable Long id,@RequestBody HomeModel mod)
	{
		return serv.update(id,mod);
	}
	@DeleteMapping("/fetch/{id}")
	public ResponseEntity<HomeModel> deleteById(@PathVariable Long id)
	{
		return serv.deleteById(id);
	}
}
