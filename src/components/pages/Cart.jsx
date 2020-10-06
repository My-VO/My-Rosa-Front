import React, { useContext, useState } from 'react';

import { CartContext } from '../context/CartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  console.log('cart : ', cart);

  const totalPrice = cart.reduce(
    (accumulator, curr) =>
      (
        parseFloat(accumulator) +
        parseFloat(curr.pricePot) +
        parseFloat(curr.priceRoot)
      ).toFixed(2),
    0
  );

  let quantity = 0;

  if (!cart) {
    return (
      <div>
        <span>Items in cart : {quantity}</span>
        <br />
        <span>Total price : {totalPrice}</span>
      </div>
    );
  }

  const cartOPtions = Object.keys(cart).forEach(function (key) {
    console.log('cart[key] : ', cart[key]);

    quantity += parseFloat(cart[key].quantityPot);

    console.log('quantity : ', quantity);
    console.log('typeof quantity : ', typeof quantity);
  });

  return (
    <div>
      <span>Items in cart : {quantity}</span>
      <br />
      <span>Total price : {totalPrice}</span>
    </div>
  );

  // console.log('cart[0] : ', cart[0]);

  // const quantity = parseFloat(cart[0].quantityPot);

  // console.log('quantity : ', quantity);
  // console.log('typeof quantity : ', typeof quantity);

  // return (
  //   <div>
  //     <span>Items in cart : {quantity}</span>
  //     <br />
  //     <span>Total price : {totalPrice}</span>
  //   </div>
  // );
};

export default Cart;
