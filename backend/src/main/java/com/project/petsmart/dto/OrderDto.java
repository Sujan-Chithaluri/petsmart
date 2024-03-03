package com.project.petsmart.dto;

import com.project.petsmart.domain.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderDto extends MongoRepository<Orders, String> {

    List<Orders> findByUserId(String userId);
}
