import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

const ItemType = ({item}) => {
  const { addItem } = useContext(CartContext);
  console.log('item : ', item);
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.type}</p>
      <p>{parseFloat(item.price).toFixed(2)} €</p>
      <button onClick={() => addItem(item)}>Add to cart</button>
    </>
  );
};

export default ItemType;
