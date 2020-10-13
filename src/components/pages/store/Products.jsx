import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const API = process.env.REACT_APP_API;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${API}/items/`);

      setProducts(result.data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <>
      <p>{products.length} résultats</p>
      <div>
        {products.map((product) => (
          <div key={product.itemId}>
            <Link
              to={`/items/${product.name}`}
              style={{ textDecoration: 'none' }}
            >
              <img src={product.PicturesItems[0].picture} alt={product.name} />
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

export default Products;
