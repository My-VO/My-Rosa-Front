import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const API = process.env.REACT_APP_API;

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${API}/items/`);

      console.log('result : ', result);

      setItems(result.data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <>
      <p>Les résultats de rosier</p>
      <div>
        {items.map((item) => (
          <div key={item.itemId}>
            <Link
              to={`/items/${item.itemId}`}
              style={{ textDecoration: 'none' }}
            >
              <img src={item.PicturesItems[0].picture} alt={item.name} />
              <h4>{item.name.toUpperCase()}</h4>
              <p>{item.variety}</p>
              <p>{item.stockQuantityPot} en stock</p>
              <p>{item.pricePot} €</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
