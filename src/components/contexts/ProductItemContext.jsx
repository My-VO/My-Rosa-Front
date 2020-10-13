import React, { createContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import axios from 'axios';
import { useRouter } from '../../hooks/useRouter';

export const ProductItemContext = createContext();

const API = process.env.REACT_APP_API;

// eslint-disable-next-line react/prop-types
const ProductItemContextProvider = ({ children }) => {
  const router = useRouter();

  const [productItem, setProductItem] = useState([]);

  const [loading, setLoading] = useState(true);

  console.log('router.pathname ProductItemContextProvider : ', router.pathname);

  useEffect(() => {
    const fetchProductItem = async () => {
      const result = await axios.get(`${API}/${router.pathname}`);

      setProductItem(result.data);
      setLoading(false);
    };
    fetchProductItem();
  }, []);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <ProductItemContext.Provider value={{ productItem }}>
      {children}
    </ProductItemContext.Provider>
  );
};

export default ProductItemContextProvider;
