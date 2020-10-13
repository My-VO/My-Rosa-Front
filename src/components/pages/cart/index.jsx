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
            <div>
              <h3>Le panier est vide</h3>
              <a href="/"> CONTINUER À FAIRE DES ACHATS</a>
            </div>
          )}
        </div>
        <hr />
        {cartItems.length > 0 && (
          <div>
            <p> Total Items</p>
            <h4>{itemCount}</h4>
            <p>Total Payment</p>
            <h3>{total}</h3>
            <hr />
            <button>COMMANDER</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
