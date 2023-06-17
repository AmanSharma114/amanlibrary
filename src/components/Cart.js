import React, { useState, useEffect } from "react";
import "../css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/storeSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.saleInfo.listPrice.amount;
    });
    return total;
  };

  const handlePayForRent = () => {
    // Perform the payment logic here
    // You can dispatch an action or call an API to handle the payment process
    // Example: dispatch(payForRent(cartItems));
    alert("Payment for rent is successful!");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">Cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} className="book-image" />
                <div className="book-details">
                  <p className="book-title">{item.volumeInfo.title}</p>
                  <p className="book-price">&#8377;{item.saleInfo.listPrice.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="total-price">Total Price: &#8377;{calculateTotalPrice()}</p>
          <button className="pay-button" onClick={handlePayForRent}>Pay for Rent</button>
        </>
      )}
      <button className="clear-button" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
