import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({product}) => {
  console.log('product CartItem : ', product);
  const { increase, decrease } = useContext(CartContext);

  return (
    <>
      <div>
        {product.PicturesItems &&
          product.PicturesItems.map((i) => (
            <div key={i.id}>
              <img src={i.picture} alt={product.name} />
            </div>
          ))}
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>
          {product.variety} {product.type}
        </p>
        <p>Price: {parseFloat(product.price).toFixed(2)}</p>
        <p>Qty: {product.quantity}</p>
        <p>Total: {parseFloat(product.price * product.quantity).toFixed(2)}</p>
      </div>
      <div>
        <button onClick={() => increase(product)}>+</button>
        <button onClick={() => decrease(product)}>-</button>
      </div>
    </>
  );
};

export default CartItem;
