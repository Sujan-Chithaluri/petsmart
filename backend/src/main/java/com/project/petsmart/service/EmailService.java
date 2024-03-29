package com.project.petsmart.service;

import com.project.petsmart.util.EmailDetails;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service

public class EmailService {

  @Autowired
  private JavaMailSender javaMailSender;

  @Value("${spring.mail.username}")
  private String sender;

  public boolean sendSimpleMail(EmailDetails details) {

    try {
      SimpleMailMessage mailMessage = new SimpleMailMessage();
      mailMessage.setFrom(sender);
      mailMessage.setTo(details.getRecipient());
      mailMessage.setText(details.getMsgBody());
      mailMessage.setSubject(details.getSubject());

      javaMailSender.send(mailMessage);
      return true;
    }

    // Catch block to handle the exceptions
    catch (Exception e) {
      return false;
    }
  }
}