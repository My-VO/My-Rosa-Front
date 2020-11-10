import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({ product }) => {
  const {
    PicturesItems,
    name,
    variety,
    type,
    price,
    stockQuantity,
    quantityOrder,
  } = product;
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <>
      <div>
        <img className="photo" src={PicturesItems[0].picture} alt={name} />
      </div>
      <div>
        <h3>{name.toUpperCase()}</h3>
        <p>
          {variety} {type.toLowerCase().replace('4l/5l', '4L/5L')}
        </p>
        <p>Prix: {parseFloat(price).toFixed(2)}</p>
        <div>
          <button
            type="button"
            onClick={quantityOrder > 1 && (() => decrease(product))}
          >
            -
          </button>
          <p>Quantité: {parseFloat(quantityOrder)}</p>
          <button
            type="button"
            onClick={quantityOrder < stockQuantity && (() => increase(product))}
          >
            +
          </button>
          <button type="button" onClick={() => removeProduct(product)}>
            X Supprimer
          </button>
        </div>
        <p>Total: {parseFloat(price * quantityOrder).toFixed(2)}</p>
      </div>
    </>
  );
};

export default CartItem;
