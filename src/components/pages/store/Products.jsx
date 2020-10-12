import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../../contexts/ProductsContext';

const Produits = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <p>{products.length} résultats</p>
      <div>
        {products &&
          products.map((product) => (
            <div key={product.itemId}>
              <Link
                to={`/items/${product.name}`}
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={product.PicturesItems[0].picture}
                  alt={product.name}
                />
                <h4>{product.name.toUpperCase()}</h4>
                <p>{product.variety}</p>
                <p>{product.stockQuantity} en stock</p>
                <p>{product.price} €</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Produits;
