import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const { children } = props;
  const [cart, setCart] = useState([]);

  console.log('props : ', props);
  console.log('props.children: ', children);
  return (
    <>
      {/* <CartContext.Provider value={[cart, setCart]}> */}
      <CartContext.Provider value="hello from context">
        {children}
      </CartContext.Provider>
    </>
  );
};

export const CartConsumer = CartContext.Consumer;
