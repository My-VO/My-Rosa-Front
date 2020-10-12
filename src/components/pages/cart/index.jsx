import React, { useContext } from 'react';

import CartProducts from './CartProducts';

import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { total, cartItems, itemCount } = useContext(CartContext);
  return (
    <>
      <div>
        <h1>Cart</h1>
        <p>This is the Cart Page.</p>
      </div>
      <div>
        <div>
          {cartItems.length > 0 ? (
            <CartProducts />
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div>
            <p> Total Items</p>
            <h4>{itemCount}</h4>
            <p>Total Payment</p>
            <h3>{total}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
