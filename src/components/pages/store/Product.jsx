import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ItemType from './ItemType';

const API = process.env.REACT_APP_API;

const ProductItem = () => {
  const { name } = useParams();
  const [productItem, setProductItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductItem = async () => {
      const result = await axios.get(`${API}/items/${name}`);

      setProductItem(result.data);
      setLoading(false);
    };
    fetchProductItem();
  }, []);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <>
      <div>
        <div>
          {productItem[0] &&
            productItem[0].PicturesItems &&
            productItem[0].PicturesItems.map((i) => (
              <div key={i.id}>{i && <img src={i.picture} alt={name} />}</div>
            ))}
        </div>
        <div>
          <h4>{productItem[0] && productItem[0].name.toUpperCase()}</h4>
          <p>{productItem[0] && productItem[0].variety}</p>
        </div>
        <hr />
        <div>
          <p>Couleur: {productItem[0] && productItem[0].color}</p>
          <p>Parfum: {productItem[0] && productItem[0].perfume}</p>
          <p>Floraison: {productItem[0] && productItem[0].flowering}</p>
          <p>Hauteur à maturité: {productItem[0] && productItem[0].size} cm</p>
        </div>
        <hr />
        <p>
          {productItem[0] &&
            productItem[0].description &&
            productItem[0] &&
            productItem[0].description.split('_')[0]}
          <a href="#description">
            <span> En savoir plus</span>
          </a>
        </p>
        <a href="#details">
          <p>VOIR PLUS DE DÉTAILS</p>
        </a>
        <hr />
        <div>
          {productItem &&
            productItem.map((item) => (
              <ItemType key={item.itemId} item={item} />
            ))}
        </div>{' '}
        <hr />
        <div id="details">
          <div>
            <h4 id="description">Description</h4>
            {productItem[0] &&
              productItem[0].description &&
              productItem[0] &&
              productItem[0].description.split('_').map((para) => (
                <div key={para.idPara}>
                  <p>{para}</p>
                </div>
              ))}
          </div>
          <hr />
          <div>
            <h4>Plantations & Soins</h4>
            {productItem[0] &&
              productItem[0].plantationCare &&
              productItem[0] &&
              productItem[0].plantationCare.split('.').map((element) => (
                <div key={element.idElement}>
                  <span>{element}</span>
                </div>
              ))}
          </div>
          <hr />
          <div>
            <h4>Utilisations</h4>
            {productItem[0] &&
              productItem[0].idealFor &&
              productItem[0].idealFor.split('.').map((element) => (
                <div key={element.idElement}>
                  <span>{element}</span>
                </div>
              ))}
          </div>
          <hr />
          <div>
            <h4>Avis & Questions Clients</h4>
          </div>
          <hr />
          <div>
            <h4>Photos clients</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
