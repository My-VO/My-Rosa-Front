import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ProductsContext = createContext();

const API = process.env.REACT_APP_API;

// eslint-disable-next-line react/prop-types
const ProductsContextProvider = ({ children }) => {
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
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
