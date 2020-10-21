const Storage = (cartItems) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  const itemCount = cartItems.reduce(
    (total, item) => total + parseFloat(item.quantityOrder),
    0
  );

  const total = cartItems
    .reduce(
      (total, item) => total + item.price * parseFloat(item.quantityOrder),
      0
    )
    .toFixed(2);

  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (
        !state.cartItems.find((item) => item.itemId === action.payload.itemId)
      ) {
        state.cartItems.push({
          ...action.payload,
          quantityOrder: parseFloat(action.quantityOrder),
        });
      } else {
        state.cartItems[
          state.cartItems.findIndex(
            (item) => item.itemId === action.payload.itemId
          )
        ].quantityOrder += parseFloat(action.quantityOrder);
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
      state.cartItems[
        state.cartItems.findIndex(
          (item) => item.itemId === action.payload.itemId
        )
      ].quantityOrder += 1;

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
      ].quantityOrder -= 1;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case 'CLEAR':
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
