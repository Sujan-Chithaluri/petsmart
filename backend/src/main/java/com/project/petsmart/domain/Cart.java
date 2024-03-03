package com.project.petsmart.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("cart")
public class Cart {
  @Id
  private String id;
  private List<CartItems> cartItems;

  private String userId;

  public Cart(String id, List<CartItems> cartItems, String userId) {
    this.id = id;
    this.cartItems = cartItems;
    this.userId = userId;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public List<CartItems> getCartItems() {
    return cartItems;
  }

  public void setCartItems(List<CartItems> cartItems) {
    this.cartItems = cartItems;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }
}
