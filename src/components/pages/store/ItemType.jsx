import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

const ItemType = ({item}) => {
  const { addItem, cartItems, increase } = useContext(CartContext);
  console.log('item : ', item);
  console.log('cartItems : ', cartItems);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.itemId === product.itemId);
  };

  return (
    <>
      <p>{item.type}</p>
      <p>{parseFloat(item.price).toFixed(2)} €</p>

      {isInCart(item) && (
        <button onClick={() => increase(item)}>Add more</button>
      )}

      {!isInCart(item) && (
        <button onClick={() => addItem(item)}>Add to cart</button>
      )}
    </>
  );
};

export default ItemType;
