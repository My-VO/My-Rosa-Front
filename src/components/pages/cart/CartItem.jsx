import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({product}) => {
  console.log('product CartItem : ', product);

  const {
    PicturesItems,
    name,
    variety,
    type,
    price,
    stockQuantity,
    quantity,
  } = product;
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <>
      <div>
        {PicturesItems &&
          // eslint-disable-next-line react/prop-types
          PicturesItems.map((i) => (
            <div key={i.id}>
              <img src={i.picture} alt={name} />
            </div>
          ))}
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          {variety} {type.toLowerCase().replace('4l/5l', '4L/5L')}
        </p>
        <p>Price: {parseFloat(price).toFixed(2)}</p>
        <div>
          <button
            onClick={quantity < stockQuantity && (() => increase(product))}
          >
            +
          </button>
          <p>Qty: {parseFloat(quantity)}</p>
          <button onClick={quantity > 1 && (() => decrease(product))}>-</button>
          <button onClick={() => removeProduct(product)}>X Supprimer</button>
        </div>
        <p>Total: {parseFloat(price * quantity).toFixed(2)}</p>
      </div>
    </>
  );
};

export default CartItem;
