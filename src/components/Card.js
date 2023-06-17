import React, { useState } from "react";
import Modal from "./Modal";
import "../css/Card.css";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/storeSlice';
import { addItem } from "../utils/storeSlice";

const Card = ({ books, onAddToCart }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  const [cartItems, setCartItems] = useState([]);
  let total = 0;
  cartItems.map((item) => {
    total += item.price / 100;
  })
  const dispatch = useDispatch();
  const addBook = (item) => {
      alert("Added to cart");
      dispatch(addItem(item))
  }

  const handleCardClick = (item) => {
    setShow(true);
    setItem(item);
  };

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
  };

  return (
    <div className="card-container">
      {books &&
        books.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          let availability = item.volumeInfo && item.volumeInfo.availability;
          let numAvailable = Math.round(
            (item.volumeInfo && item.volumeInfo.numAvailable) / 2
          );
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <div key={item.id} className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                  {availability && (
                    <p className="availability">
                      Availability: {availability ? "Available" : "Not Available"}
                    </p>
                  )}
                  {numAvailable && (
                    <p className="num-available">
                      Number of Available Copies: {numAvailable}
                    </p>
                  )}
                  <button onClick={() => handleCardClick(item)}>MORE</button>
                  <button
                    onClick={() =>
                      {
                        handleAddToCart(item)
                      addBook(item)
                      }
                    }
                    className="add-to-cart"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </div>
  );
};

export default Card;
