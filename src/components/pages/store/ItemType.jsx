import React, { useState, useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

const ItemType = ({item}) => {
  const { addItem, cartItems, increase } = useContext(CartContext);
  console.log('item : ', item);
  console.log('cartItems : ', cartItems);

  // const isInCart = (product) => {
  //   return !!cartItems.find((item) => item.itemId === product.itemId);
  // };

  const [quantity, setQuantity] = useState(0);

  let quantityIncrementHandle = '';
  if (quantity < item.stockQuantity) {
    quantityIncrementHandle = () => {
      setQuantity(quantity + 1);
    };
  }

  let quantityDecrementHandle = '';
  if (quantity > 0) {
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

      {/* {isInCart(item) && (
        <button onClick={() => increase(item)}>Add more</button>
      )}

      {!isInCart(item) && (
        <button onClick={() => addItem(item)}>Add to cart</button>
      )} */}
    </>
  );
};

export default ItemType;
