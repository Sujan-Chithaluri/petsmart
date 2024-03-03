package com.project.petsmart.dto;

import com.project.petsmart.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDto extends MongoRepository<User, String> {

    Optional<User> findByEmailAndPassword(String email, String password);
    Optional<User> findByEmailAndOtp(String email, String otp);

    User findFirstByEmail(String email);
}
