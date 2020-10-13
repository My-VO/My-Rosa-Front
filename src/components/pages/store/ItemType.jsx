import React, { useState, useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

const ItemType = ({item}) => {
  const { addItem, cartItems } = useContext(CartContext);
  console.log('item : ', item);
  console.log('cartItems : ', cartItems);

  const [quantity, setQuantity] = useState(1);

  let quantityIncrementHandle = '';
  if (quantity < item.stockQuantity) {
    quantityIncrementHandle = () => {
      setQuantity(quantity + 1);
    };
  }

  let quantityDecrementHandle = '';
  if (quantity > 1) {
    quantityDecrementHandle = () => {
      setQuantity(quantity - 1);
    };
  }

  return (
    <>
      <p>{item.type}</p>
      <p>{parseFloat(item.price).toFixed(2)} €</p>

      <div>
        <button onClick={quantityDecrementHandle}>-</button>
        <input min="0" type="number" value={quantity} />
        <button onClick={quantityIncrementHandle}>+</button>
      </div>

      <button onClick={() => addItem(item, quantity)}>
        Ajouter au pannier
      </button>
    </>
  );
};

export default ItemType;
