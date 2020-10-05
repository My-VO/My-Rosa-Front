import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { CartConsumer } from '../context/CartContext';

const API = process.env.REACT_APP_API;

const Item = () => {
  const { name } = useParams();

  const [itemPot, setItemPot] = useState({});

  const [itemRoot, setItemRoot] = useState({});

  const [quantityPot, setQuantityPot] = useState(0);
  const [quantityRoot, setQuantityRoot] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`${API}/items/${name}`);

      setItemPot(result.data[0]);

      setItemRoot(result.data[1]);

      document.title = `Quantité du rosier en conteneur ${quantityPot}`;
      document.title = `Quantité du rosier à racines ${quantityRoot}`;

      setLoading(false);
    };
    fetchItem();
  }, [name]);

  if (loading) {
    return 'Chargement...';
  }

  let quantityPotDecrementHandle = '';
  if (quantityPot > 0) {
    quantityPotDecrementHandle = () => {
      setQuantityPot(quantityPot - 1);
    };
  }

  let quantityRootDecrementHandle = '';
  if (quantityPot > 0) {
    quantityRootDecrementHandle = () => {
      setQuantityPot(quantityPot - 1);
    };
  }

  return (
    <>
      {itemPot.PicturesItems &&
        itemPot.PicturesItems.map((item) => (
          <div key={item.id}>
            <img src={item.picture} alt={name} />
          </div>
        ))}

      <div>
        <div>
          <h4>{name.toUpperCase()}</h4>
          <p>{itemPot.variety}</p>
        </div>
        <hr />
        <div>
          <p>Couleur: {itemPot.color}</p>
          <p>Parfum: {itemPot.perfume}</p>
          <p>Floraison: {itemPot.flowering}</p>
          <p>Hauteur à maturité: {itemPot.size} cm</p>
        </div>
        <hr />
        <p>
          {itemPot.description && itemPot.description.split('_')[0]}
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
                <p>{parseFloat(itemPot.price).toFixed(2)} €</p>
              </div>
              <p>Livraison - novembre 2020</p>
              <div>
                <p>Quantité</p>
                <div>
                  <button onClick={quantityPotDecrementHandle}>-</button>
                  <input min="0" type="number" value={quantityPot} />
                  <button onClick={() => setQuantityPot(quantityPot + 1)}>
                    +
                  </button>
                </div>
                <div>
                  <CartConsumer>
                    {(value) => {
                      return <h1>{value}</h1>;
                    }}
                  </CartConsumer>
                </div>
                <button
                  onClick={() =>
                    alert(`${itemPot.itemId}:${quantityPot * itemPot.price}`)
                  }
                >
                  Ajouter au pannier
                </button>
              </div>
              <p>Ajouter à la liste de souhaits</p>
            </div>
          </div>
          <div>
            <img />
            <div>
              <div>
                <p>À Roots Nues</p>
                <p>{parseFloat(itemRoot.price).toFixed(2)} €</p>
              </div>
              <p>Livraison - novembre 2020</p>
              <div>
                <p>Quantité</p>
                <div>
                  <button onClick={quantityRootDecrementHandle}>-</button>
                  <input min="0" type="number" value={quantityRoot} />
                  <button onClick={() => setQuantityRoot(quantityRoot + 1)}>
                    +
                  </button>
                </div>
                <button
                  onClick={() =>
                    alert(`${itemRoot.itemId}:${quantityRoot * itemRoot.price}`)
                  }
                >
                  Ajouter au pannier
                </button>
              </div>
              <p>Ajouter à la liste de souhaits</p>
            </div>
          </div>
        </div>
        <hr />
        <div id="details">
          <div>
            <h4 id="description">Description</h4>
            {itemPot.description &&
              itemPot.description.split('_').map((para) => (
                <div key={para.idPara}>
                  <p>{para}</p>
                </div>
              ))}
          </div>
          <hr />
          <div>
            <h4>Plantations & Soins</h4>
            {itemPot.plantationCare &&
              itemPot.plantationCare.split('.').map((element) => (
                <div key={element.idElement}>
                  <span>{element}</span>
                </div>
              ))}
          </div>
          <hr />
          <div>
            <h4>Utilisations</h4>
            {itemPot.idealFor &&
              itemPot.idealFor.split('.').map((element) => (
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

// import React, { useEffect, useState, useContext } from 'react';

// && <img src={picturesItems[0].picture} alt={name} />
// import { useParams } from 'react-router-dom';

// import axios from 'axios';

// import { CartContext } from '../CartContext';

// const API = process.env.REACT_APP_API;

// const Item = () => {
//   const { name } = useParams();

//   const [item, setItem] = useState('');
//   const {
//     PicturesItems,
//     variety,
//     color,
//     perfume,
//     flowering,
//     size,
//     description,
//     plantationCare,
//     idealFor,
//     price,
//     pot,
//   } = item;

//   const [loading, setLoading] = useState(true);

//   const [cart, setCart] = useContext(CartContext);

//   const addPotToCart = () => {
//     item.pot = true;
//     setCart((currentState) => [...currentState, item]);
//   };

//   const addRootToCart = () => {
//     item.pot = false;
//     setCart((currentState) => [...currentState, item]);
//   };

//   useEffect(() => {
//     const fetchItem = async () => {
//       const result = await axios(`${API}/items/${name}`);

//       console.log('result.item : ', result);

//       setItem(result.data);
//       setLoading(false);
//     };
//     fetchItem();
//   }, [name]);

//   if (loading) {
//     return 'Chargement...';
//   }

//   return (
//     <>
//       <img src={PicturesItems[0].picture} alt={name} />
//       <div>
//         <div>
//           <h4>{name.toUpperCase()}</h4>
//           <p>{variety}</p>
//         </div>
//         <hr />
//         <div>
//           <p>Couleur: {color}</p>
//           <p>Parfum: {perfume}</p>
//           <p>Floraison: {flowering}</p>
//           <p>Hauteur à maturité: {size} cm</p>
//         </div>
//         <hr />
//         <p>
//           {description.split('_')[0]}
//           <a href="#description">
//             <span> En savoir plus</span>
//           </a>
//         </p>
//         <a href="#details">
//           <p>VOIR PLUS DE DÉTAILS</p>
//         </a>
//         <hr />
//         <div>
//           <div>
//             <img />
//             <div>
//               <div>
//                 <p>En Conteneur de 4L/5L</p>
//                 <p>{parseFloat(price).toFixed(2)} €</p>
//               </div>
//               <p>Livraison - novembre 2020</p>
//               <div>
//                 <p>Quantité</p>
//                 <button onClick={addPotToCart}>Ajouter au pannier</button>
//               </div>
//               <p>Ajouter à la liste de souhaits</p>
//             </div>
//           </div>
//           <div>
//             <img />
//             <div>
//               <div>
//                 <p>À Roots Nues</p>
//                 <p>{parseFloat(price).toFixed(2)} €</p>
//               </div>
//               <p>Livraison - novembre 2020</p>
//               <div>
//                 <p>Quantité</p>
//                 <button onClick={addRootToCart}>Ajouter au pannier</button>
//               </div>
//               <p>Ajouter à la liste de souhaits</p>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div id="details">
//           <div>
//             <h4 id="description">Description</h4>
//             {description.split('_').map((para) => (
//               <div key={para.idPara}>
//                 <p>{para}</p>
//               </div>
//             ))}
//           </div>
//           <hr />
//           <div>
//             <h4>Plantations & Soins</h4>
//             {plantationCare.split('.').map((element) => (
//               <div key={element.idElement}>
//                 <span>{element}</span>
//               </div>
//             ))}
//           </div>
//           <hr />
//           <div>
//             <h4>Utilisations</h4>
//             {idealFor.split('.').map((element) => (
//               <div key={element.idElement}>
//                 <span>{element}</span>
//               </div>
//             ))}
//           </div>
//           <hr />
//           <div>
//             <h4>Avis & Questions Clients</h4>
//           </div>
//           <hr />
//           <div>
//             <h4>Photos clients</h4>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Item;
