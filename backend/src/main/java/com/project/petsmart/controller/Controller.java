package com.project.petsmart.controller;

import com.project.petsmart.domain.Appointment;
import com.project.petsmart.domain.Cart;
import com.project.petsmart.domain.Orders;
import com.project.petsmart.service.AppointmentService;
import com.project.petsmart.service.CartService;
import com.project.petsmart.service.OrderService;
import com.project.petsmart.service.UserService;
import com.project.petsmart.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    UserService userService;

    @Autowired
    OrderService orderService;

    @Autowired
    AppointmentService appointmentService;

    @Autowired
    CartService cartService;



    @GetMapping(value = "/getAllUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/getUser/{id}")
    public User getUser(@PathVariable String id) {
        var user= userService.getUserById(id);
        return user.get();
    }

    @PostMapping("/saveUser")
    public ResponseEntity saveUser(@RequestBody User user) {
        User save = userService.saveUser(user);
        if(save!=null){
            return new ResponseEntity(save, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/loginUser")
    public ResponseEntity loginUser(@RequestBody User user) {
        Optional<User> fetchedUser = userService.getUser(user);
         if(fetchedUser.isPresent()){
             var updatedUser = fetchedUser.get();

             updatedUser.setPassword(null);
             updatedUser.setOtp(null);
             
            return new ResponseEntity(updatedUser, HttpStatus.OK);
        }
        else {
            return new ResponseEntity("Failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getOrders/{id}")
    public List<Orders> getAllOrdersForUserId(@PathVariable String id){
        return  orderService.getOrderForUserId(id);
    }

    @PostMapping("/saveOrder")
    public Orders saveOrder(@RequestBody Orders orders){
        return  orderService.saveOrderDetails(orders);
    }

    @GetMapping("/getAppointments/{id}")
    public List<Appointment> getAppointmentsForUserId(@PathVariable String id){
        return  appointmentService.getAppointmentsForUserId(id);
    }

    @PostMapping("/saveAppointment")
    public Appointment saveOrder(@RequestBody Appointment appointment){
        return  appointmentService.saveAppointmentDetails(appointment);
    }

    @PostMapping("/saveCart")
    public Cart saveCart(@RequestBody Cart cart){
        return  cartService.saveCartDetails(cart);
    }

    @GetMapping("/getCart/{userId}")
    public Cart saveCart(@PathVariable String userId){
        return  cartService.getCartById(userId);
    }

    @GetMapping("/sendOtp/{email}")
    public ResponseEntity resetPassword(@PathVariable String email){
        User userByEmail = userService.findUserByEmail(email);
        if(Objects.nonNull(userByEmail)){

            User obj =  userService.OTP(6, email);
            obj.setOtp(null);
            obj.setPassword(null);

            return new ResponseEntity(obj, HttpStatus.OK);
        }
        return new ResponseEntity("Please Enter a Valid Email", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/updatePassword")
    public ResponseEntity updatePassword(@RequestBody User user){
        User updatedUser = userService.updatePassword(user);
        if(Objects.nonNull(updatedUser)){
            updatedUser.setOtp(null);
            updatedUser.setPassword(null);

            return new ResponseEntity(updatedUser, HttpStatus.OK);
        }
        return new ResponseEntity("Failed to update Password", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
