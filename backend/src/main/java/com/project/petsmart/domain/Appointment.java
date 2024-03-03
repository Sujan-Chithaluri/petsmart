package com.project.petsmart.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("appointments")
public class Appointment {

    @Id
    private String id;
    private String serviceId;
    private String serviceName;
    private String username;
    private String email;
    private String date;
    private String timeSlot;
    private String message;
    private String userId;

    public Appointment(String serviceId, String serviceName, String username, String email, String date, String timeSlot, String message, String userId) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.username = username;
        this.email = email;
        this.date = date;
        this.timeSlot = timeSlot;
        this.message = message;
        this.userId = userId;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(String timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
