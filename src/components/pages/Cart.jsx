import React, { useContext } from 'react';

import { CartContext } from '../CartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  console.log('cart : ', cart);

  const totalPrice = cart.reduce(
    (accumulator, curr) =>
      (parseFloat(accumulator) + parseFloat(curr.pricePot)).toFixed(2),
    0
  );
  return (
    <div>
      <span>Items in cart : {cart.length}</span>
      <br />
      <span>Total price : {totalPrice}</span>
    </div>
  );
};

export default Cart;
