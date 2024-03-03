package com.project.petsmart.service;

import com.project.petsmart.domain.Orders;
import com.project.petsmart.domain.User;
import com.project.petsmart.dto.OrderDto;
import com.project.petsmart.dto.UserDto;
import com.project.petsmart.util.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderDto orderDto;

    @Autowired
    UserService userService;

    @Autowired
    EmailService emailService;

    public List<Orders> getOrderForUserId(String userId) {
        return orderDto.findByUserId(userId);
    }

    public Orders saveOrderDetails(Orders orders) {
        Orders save = orderDto.save(orders);
        Optional<User> user = userService.getUserById(save.getUserId());
        if (user.isPresent()) {
            
            String body =   "\nHello " + user.get().getFirstname() +
                            "\n\nWe are pleased to confirm your recent booking order with Petsmart. Thank you for choosing our services!"+
                            "\n\nYour Order with PetSmart was confirmed with order number " + save.getId() +
                            "\nYour Order will be delivered on " + save.getDelivery().getDeliveryDate()+
                            "\n\nWe're looking forward to serving you and your pet!"+
                            "\n\nWarm Regards,"+
                            "\nThe PetSmart Team";

            emailService.sendSimpleMail(new EmailDetails(user.get().getEmail(), body,
                    "Booking Confirmation with PetSmart"));
        }
        return save;
    }
}
