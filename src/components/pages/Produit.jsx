import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

const API = process.env.REACT_APP_API;

const Item = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState('');
  const {
    PicturesItems,
    name,
    variety,
    color,
    perfume,
    flowering,
    size,
    description,
    plantationCare,
    idealFor,
  } = item;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`${API}/items/${itemId}`);

      console.log('result.item : ', result);

      setItem(result.data);
      setLoading(false);
    };
    fetchItem();
  }, [itemId]);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <>
      <Link to="/">Back to Home</Link>
      <img src={PicturesItems[0].picture} alt={name} />
      <div>
        <div>
          <h4>{name.toUpperCase()}</h4>
          <p>{variety}</p>
        </div>
        <hr />
        <div>
          <p>Couleur: {color}</p>
          <p>Parfum: {perfume}</p>
          <p>Floraison: {flowering}</p>
          <p>Hauteur à maturité: {size} cm</p>
        </div>
        <hr />
        <p>
          {description.split('_')[0]}{' '}
          <a href="#description">
            <span> En savoir plus</span>
          </a>
        </p>
        <a href="#details">
          <p>VOIR PLUS DE DÉTAILS</p>
        </a>
        <hr />
        <div>Ajouter au panier</div>
        <hr />
        <div id="details">
          <div>
            <h4 id="description">Description</h4>
            {description.split('_').map((para) => (
              <div key={para.idPara}>
                <p>{para}</p>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <h4>Plantations & Soins</h4>
            {plantationCare.split('.').map((element) => (
              <div key={element.idElement}>
                <span>{element}</span>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <h4>Utilisations</h4>
            {idealFor.split('.').map((element) => (
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

export default Item;
