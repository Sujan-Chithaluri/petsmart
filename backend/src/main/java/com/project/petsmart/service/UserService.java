package com.project.petsmart.service;

import com.project.petsmart.domain.User;
import com.project.petsmart.dto.UserDto;
import com.project.petsmart.util.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService {

  @Autowired
  UserDto userDto;

  @Autowired
  EmailService emailService;

  public List<User> getAllUsers() {
    return userDto.findAll();
  }

  public Optional<User> getUserById(String id) {
    return userDto.findById(id);
  }

  public User saveUser(User user) {
    User userByEmail = userDto.findFirstByEmail(user.getEmail());
    if (userByEmail != null) {
      return null;
    }

    User save = userDto.save(user);

    if (save != null) {
      emailService.sendSimpleMail(new EmailDetails(save.getEmail(), String.format("Hello %s %s, \n\nNew PetSmart User Created with Email Address %s \n\nWe're looking forward to serving you and your pet! \n\nWarm Regards \nThe PetSmart Team", save.getFirstname(), save.getLastname(), save.getEmail()), "Welcome PetSmart New User"));
    } else {
      return null;
    }
    return save;
  }

  public Optional<User> getUser(User user) {
    return userDto.findByEmailAndPassword(user.getEmail(), user.getPassword());
  }

  public User findUserByEmail(String email) {
    return userDto.findFirstByEmail(email);
  }

  public User OTP(int len, String email) {
    String numbers = "0123456789";
    Random rndm_method = new Random();
    char[] otp = new char[len];
    for (int i = 0; i < len; i++) {
      otp[i] = numbers.charAt(rndm_method.nextInt(numbers.length()));
    }

    String finalOtp= new String(otp);
    String body =   "Warm regards from Petsmart!" + 
                    "\n\nYour new OTP is : "+finalOtp+
                    "\n\nFor security reasons, do not share this OTP with anyone." +
                    "\nIf you have any questions or concerns, please feel free to contact our support team"+
                    "\n\nWe're looking forward to serving you and your pet!"+
                    "\n\nWarm Regards,"+
                    "\nThe PetSmart Team";

    emailService.sendSimpleMail(new EmailDetails(email, body, "PetSmart Password Change Request"));

    User userByEmail = userDto.findFirstByEmail(email);
    userByEmail.setOtp(finalOtp);
      
    return userDto.save(userByEmail);
  }

  public User updatePassword(User user) {
    Optional<User>  userData = userDto.findByEmailAndOtp(user.getEmail(), user.getOtp());
    if(userData.isPresent()){
      var updatedUser = userData.get();
      updatedUser.setPassword(user.getPassword());

      User save = userDto.save(updatedUser);

      return save;
    }

    return null;
    
  }
}
