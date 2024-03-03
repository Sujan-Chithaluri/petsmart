package com.project.petsmart.dto;

import com.project.petsmart.domain.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartDto extends MongoRepository<Cart, String> {

  Cart findCartByUserId(String userId);

}
