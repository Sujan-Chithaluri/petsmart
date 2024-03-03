package com.project.petsmart;

import com.project.petsmart.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PetsmartApplication {

	@Autowired
	UserDto userDto;

	public static void main(String[] args) {
		SpringApplication.run(PetsmartApplication.class, args);
	}

}
