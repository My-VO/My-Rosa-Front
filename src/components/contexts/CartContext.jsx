import React, { createContext, useReducer } from 'react';

import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext();

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];
const initialState = { cartItems: storage, ...sumItems(storage) };
// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (payload, quantityOrder) => {
    dispatch({ type: 'ADD_ITEM', payload, quantityOrder });
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload });
  };

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload });
  };

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const contextValues = {
    addItem,
    increase,
    decrease,
    removeProduct,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
