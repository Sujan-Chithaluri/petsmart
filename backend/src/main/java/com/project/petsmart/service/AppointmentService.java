package com.project.petsmart.service;

import com.project.petsmart.domain.Appointment;
import com.project.petsmart.domain.Orders;
import com.project.petsmart.dto.AppointmentDto;
import com.project.petsmart.dto.OrderDto;
import com.project.petsmart.util.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentDto appointmentDto;

    @Autowired
    EmailService emailService;

    public List<Appointment> getAppointmentsForUserId(String userId){
        return appointmentDto.findByUserId(userId);
    }

    public Appointment saveAppointmentDetails(Appointment appointment){
        Appointment save = appointmentDto.save(appointment);

        if(save!=null && save.getServiceId()!="parks") {
            String body = "Dear %s,\n\n"
            + "Thank you for booking a %s service with PetSmart. We're excited to confirm your appointment details:\n\n"
            + "User Name: %s\n"
            + "Location: %s\n"
            + "Date: %s\n"
            + "Time Slot: %s\n\n"
            + "Please plan to arrive a few minutes before your scheduled slot.\n\n"
            + "We're looking forward to serving you and your pet!\n\n"
            + "Warm Regards,\n"
            + "The PetSmart Team";

            emailService.sendSimpleMail(new EmailDetails(save.getEmail(), String.format(body,
                save.getUsername(),
                save.getServiceId(), 
                save.getUsername(),
                save.getServiceName(),
                save.getDate(), save.getTimeSlot()),
                "Appointment Confirmation with PetSmart"));
        }

        if(save!=null && save.getServiceId().equals("parks")) {
            String body = "Dear %s,\n\n"
            + "Thank you for using PetSmart. We're excited to give recommendations for the park you choosed:\n\n"
            + "User Name: %s\n"
            + "Location: %s\n\n"
            + "Our agent will get back to you to provide recommendations\n\n"
            + "We're looking forward to serving you and your pet!\n\n"
            + "Warm Regards,\n"
            + "The PetSmart Team";

            emailService.sendSimpleMail(new EmailDetails(save.getEmail(), String.format(body,
                save.getUsername(),
                save.getUsername(),
                save.getServiceName()),
                "Park recommendations from PetSmart"));
        }


        return  save;
    }
}
