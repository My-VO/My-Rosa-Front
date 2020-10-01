import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { CartContext } from '../CartContext';

const API = process.env.REACT_APP_API;

const Item = () => {
  const { name } = useParams();

  const [item, setItem] = useState('');
  const {
    PicturesItems,
    variety,
    color,
    perfume,
    flowering,
    size,
    description,
    plantationCare,
    idealFor,
    price,
    pot,
  } = item;

  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useContext(CartContext);

  const addPotToCart = () => {
    item.pot = true;
    setCart((currentState) => [...currentState, item]);
  };

  const addRacineToCart = () => {
    item.pot = false;
    setCart((currentState) => [...currentState, item]);
  };

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`${API}/items/${name}`);

      console.log('result.item : ', result);

      setItem(result.data);
      setLoading(false);
    };
    fetchItem();
  }, [name]);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <>
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
        <div>
          <div>
            <img />
            <div>
              <div>
                <p>En Conteneur de 4L/5L</p>
                <p>{parseFloat(price).toFixed(2)} €</p>
              </div>
              <p>Livraison - novembre 2020</p>
              <div>
                <p>Quantité</p>
                <button onClick={addPotToCart}>Ajouter au pannier</button>
              </div>
              <p>Ajouter à la liste de souhaits</p>
            </div>
          </div>
          <div>
            <img />
            <div>
              <div>
                <p>À Racines Nues</p>
                <p>{parseFloat(price).toFixed(2)} €</p>
              </div>
              <p>Livraison - novembre 2020</p>
              <div>
                <p>Quantité</p>
                <button onClick={addRacineToCart}>Ajouter au pannier</button>
              </div>
              <p>Ajouter à la liste de souhaits</p>
            </div>
          </div>
        </div>
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
