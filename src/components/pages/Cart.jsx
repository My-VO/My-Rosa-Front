import React, { useContext, useState } from 'react';

import { CartContext } from '../context/CartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  console.log('cart : ', cart);

  let quantity = 0;

  let totalPrice = 0;

  const cartOPtions = Object.keys(cart).forEach(function (key) {
    console.log('cart[key] : ', cart[key]);

    quantity += parseFloat(cart[key].quantityPot);

    console.log('quantity : ', quantity);

    totalPrice += parseFloat(cart[key].quantityPot * cart[key].itemPot.price);
  });

  const totalPriceFixed2 = totalPrice.toFixed(2);
  return (
    <div>
      <span>Items in cart : {quantity}</span>
      <br />
      <span>Total price : {totalPriceFixed2}</span>
    </div>
  );
};

export default Cart;
