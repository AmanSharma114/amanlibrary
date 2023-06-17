import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Cart from './Cart';
import Card from './Card';

const CartPage = () => {
  const { isAuthenticated } = useAuth0();
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const { title } = item.volumeInfo;
    const { amount } = item.saleInfo.listPrice;
    const cartItem = { id: item.id, title, price: amount };

    // Check if the item is already in the cart
    let found = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        found = true;
        break;
      }
    }

    // If the item is not already in the cart, add it
    if (!found) {
      setCartItems([...cartItems, cartItem]);
    }

    // Alert the user that the item was added to the cart
    alert("Added to cart");
  };

  return (
    <div>
          <Card books={[]} onAddToCart={handleAddToCart} />
          <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
