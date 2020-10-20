import React, { useState, useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

const ItemType = ({item}) => {
  const { addItem, cartItems } = useContext(CartContext);
  console.log('item : ', item);
  console.log('cartItems : ', cartItems);

  const [quantityOrder, setquantityOrder] = useState(1);

  let quantityOrderIncrementHandle = '';
  if (quantityOrder < item.stockQuantity) {
    quantityOrderIncrementHandle = () => {
      setquantityOrder(quantityOrder + 1);
    };
  }

  let quantityOrderDecrementHandle = '';
  if (quantityOrder > 1) {
    quantityOrderDecrementHandle = () => {
      setquantityOrder(quantityOrder - 1);
    };
  }

  return (
    <>
      <p>{item.type}</p>
      <p>{parseFloat(item.price).toFixed(2)} €</p>

      <div>
        <button onClick={quantityOrderDecrementHandle}>-</button>
        <input min="0" type="number" value={quantityOrder} />
        <button onClick={quantityOrderIncrementHandle}>+</button>
      </div>

      <button onClick={() => addItem(item, quantityOrder)}>
        Ajouter au pannier
      </button>
    </>
  );
};

export default ItemType;
