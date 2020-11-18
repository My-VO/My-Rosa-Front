import React, { useState, useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

// eslint-disable-next-line react/prop-types
const ItemType = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const [quantityOrder, setquantityOrder] = useState(1);

  let quantityOrderIncrementHandle = '';
  // eslint-disable-next-line react/prop-types
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
      {item.type.toLowerCase().includes('conteneur') ? (
        <img
          src="https://cdn.shopify.com/s/files/1/0250/2157/9343/files/potted-variant-climber-deleafed_240x.png"
          alt="{item.type}"
        />
      ) : (
        <img
          src="https://cdn.shopify.com/s/files/1/0250/2157/9343/files/bare-root-variant-bare-1_240x.png"
          alt="{item.type}"
        />
      )}
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
