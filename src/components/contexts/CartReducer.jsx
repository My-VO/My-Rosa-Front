const Storage = (cartItems) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  console.log('cartItems : ', cartItems);

  Storage(cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log('itemCount : ', itemCount);
  const total = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  console.log('total : ', total);

  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_ITEM':
      if (
        !state.cartItems.find((item) => item.itemId === action.payload.itemId)
      ) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    default:
      return state;
  }
};
