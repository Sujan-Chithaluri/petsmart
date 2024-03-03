package com.project.petsmart.dto;

import com.project.petsmart.domain.Appointment;
import com.project.petsmart.domain.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AppointmentDto extends MongoRepository<Appointment, String> {
    List<Appointment> findByUserId(String userId);
}
