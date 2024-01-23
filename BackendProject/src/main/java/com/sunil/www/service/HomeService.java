package com.sunil.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sunil.www.model.HomeModel;
import com.sunil.www.repos.HomeRepos;

@Service
public class HomeService
{
	@Autowired
	HomeRepos rep;
	
	public List<HomeModel> getDetails()
	{
		return rep.findAll();
	}
	public HomeModel addDetails(HomeModel mod)
	{
		return rep.save(mod);
	}
	public HomeModel fetchById(Long id)
	{
		return rep.findById(id).get();
	}
	public ResponseEntity<HomeModel> update(Long id,HomeModel mod)
	{
		HomeModel custom=rep.findById(id).get();
		custom.setName(mod.getName());
		custom.setLocation(mod.getLocation());
		custom.setEmail(mod.getEmail());
		HomeModel updtEmp=rep.save(custom);
		return ResponseEntity.ok(updtEmp);
	}
	public ResponseEntity<HomeModel> deleteById(Long id)
	{
		HomeModel mod=rep.findById(id).get();
		rep.delete(mod);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
