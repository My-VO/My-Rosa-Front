import React, { useContext } from 'react';

import CartItem from './CartItem';

import { CartContext } from '../../contexts/CartContext';

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems &&
        cartItems.map((product) => (
          <CartItem key={product.itemId} product={product} />
        ))}
    </>
  );
};

export default CartProducts;
