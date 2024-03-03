package com.project.petsmart.domain;

public class Delivery {

    private String deliveryType;
    private String deliveryDate;

    private String address;

    public Delivery(String deliveryType, String deliveryDate, String address) {
        this.deliveryType = deliveryType;
        this.deliveryDate = deliveryDate;
        this.address = address;
    }

    public String getDeliveryType() {
        return deliveryType;
    }

    public void setDeliveryType(String deliveryType) {
        this.deliveryType = deliveryType;
    }

    public String getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
