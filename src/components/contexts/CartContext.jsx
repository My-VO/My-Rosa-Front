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

  const addItem = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload });
  };

  const contextValues = {
    addItem,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

// import React, { useState } from 'react';

// export const CartContext = React.createContext();

// export const CartProvider = (props) => {
//   const { children } = props;
//   const [cart, setCart] = useState([]);

//   console.log('props : ', props);
//   console.log('props.children: ', children);
//   return (
//     <>CartProvider
//       <CartContext.Provider value={[cart, setCart]}>
//         {/* <CartContext.Provider value="hello from context"> */}
//         {children}
//       </CartContext.Provider>
//     </>
//   );
// };

// export const CartConsumer = CartContext.Consumer;
