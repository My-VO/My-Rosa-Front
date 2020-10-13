const Storage = (cartItems) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  console.log('cartItems : ', cartItems);

  Storage(cartItems);
  const itemCount = cartItems.reduce(
    (total, item) => total + parseFloat(item.quantity),
    0
  );

  const total = cartItems
    .reduce((total, item) => total + item.price * parseFloat(item.quantity), 0)
    .toFixed(2);

  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  console.log('state MY', state);

  switch (action.type) {
    case 'ADD_ITEM':
      if (
        !state.cartItems.find((item) => item.itemId === action.payload.itemId)
      ) {
        state.cartItems.push({
          ...action.payload,
          quantity: parseFloat(action.quantity),
        });
      } else {
        state.cartItems[
          state.cartItems.findIndex(
            (item) => item.itemId === action.payload.itemId
          )
        ].quantity += parseFloat(action.quantity);
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter(
            (item) => item.itemId !== action.payload.itemId
          )
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item) => item.itemId !== action.payload.itemId
          ),
        ],
      };

    case 'INCREASE':
      // eslint-disable-next-line no-param-reassign
      console.log(
        'tutu index',
        state.cartItems.findIndex(
          (item) => item.itemId === action.payload.itemId
        )
      );

      console.log(
        'tutu quantity',
        state.cartItems[
          state.cartItems.findIndex(
            (item) => item.itemId === action.payload.itemId
          )
        ].quantity
      );

      state.cartItems[
        state.cartItems.findIndex(
          (item) => item.itemId === action.payload.itemId
        )
      ].quantity += 1;

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case 'DECREASE':
      // eslint-disable-next-line no-param-reassign
      state.cartItems[
        state.cartItems.findIndex(
          (item) => item.itemId === action.payload.itemId
        )
      ].quantity -= 1;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    default:
      return state;
  }
};
