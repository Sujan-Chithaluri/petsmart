package com.project.petsmart.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("orders")
public class Orders {

    @Id
    private String id;
    private List<Items> orderItem;

    private Delivery delivery;
    private String userId;

    private String cardNumber;

    private String nameOnTheCard;

    public Orders(String id, List<Items> orderItem, Delivery delivery, String userId, String cardNumber, String nameOnTheCard) {
        this.id = id;
        this.orderItem = orderItem;
        this.delivery= delivery;
        this.userId = userId;
        this.cardNumber = cardNumber;
        this.nameOnTheCard = nameOnTheCard;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Items> getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(List<Items> orderItem) {
        this.orderItem = orderItem;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getNameOnTheCard() {
        return nameOnTheCard;
    }

    public void setNameOnTheCard(String nameOnTheCard) {
        this.nameOnTheCard = nameOnTheCard;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }
}
