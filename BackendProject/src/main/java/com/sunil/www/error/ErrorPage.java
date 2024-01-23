package com.sunil.www.error;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/error")
@RestController
public class ErrorPage
{
	public String error()
	{
		return "ID NOT FOUND";
	}
}
