package com.project.petsmart.service;

import com.project.petsmart.domain.Cart;
import com.project.petsmart.dto.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class CartService {

  @Autowired
  CartDto cartDto;
  public Cart saveCartDetails(Cart cart) {
    Cart existingCart= cartDto.findCartByUserId(cart.getUserId());
    if(Objects.nonNull(existingCart)){
      existingCart.setCartItems(cart.getCartItems());
      return cartDto.save(existingCart);
    }else{
      return cartDto.save(cart);
    }
  }

  public Cart getCartById(String userId){
    return cartDto.findCartByUserId(userId);
  }
}
