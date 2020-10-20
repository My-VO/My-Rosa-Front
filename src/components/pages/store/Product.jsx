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

// ---------------------------------------//-----------------------------

// onClick={() =>
//   alert(`${itemRoot.itemId}:${quantityOrderRoot * itemRoot.price}`)
// }

// import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';

// import axios from 'axios';
// import { CartConsumer, CartContext } from '../contexts/CartContext';

// const API = process.env.REACT_APP_API;

// const Item = () => {
//   const { name } = useParams();

//   const [item, setItem] = useState([]);

//   console.log('item : ', item);

//   const [itemPot, setItemPot] = useState({});

//   const [itemRoot, setItemRoot] = useState({});

//   const [quantityOrderPot, setquantityOrderPot] = useState(0);
//   const [quantityOrderRoot, setquantityOrderRoot] = useState(0);

//   const [product, setProduct] = useState([]);

//   console.log('product: ', product);

//   const [cart, setCart] = useContext(CartContext);

//   const addPotToCart = () => {
//     setProduct((p, q) => [
//       { ...p, ...q },
//       { itemPot, quantityOrderPot },
//     ]);

//     setCart((currentState) => [...currentState, { itemPot, quantityOrderPot }]);
//   };

//   const addRootToCart = () => {
//     setProduct((p, q) => [
//       { ...p, ...q },
//       { itemRoot, quantityOrderRoot },
//     ]);

//     setCart((currentState) => [...currentState, { itemRoot, quantityOrderRoot }]);
//   };

//   useEffect(() => {
//     const fetchItem = async () => {
//       const result = await axios(`${API}/items/${name}`);

//       const resultOptions = Object.keys(result.data).forEach(function (key) {
//         setItem(result.data[key]);
//       });

//       setItemPot(result.data[0]);

//       setItemRoot(result.data[1]);

//       document.title = `Quantité du rosier en conteneur ${quantityOrderPot} et quantité du rosier à racines ${quantityOrderRoot}`;

//       setLoading(false);
//     };

//     console.log('cart Pot : ', cart);

//     console.log('cart Root : ', cart);

//     fetchItem();
//   }, [name]);

//   const [loading, setLoading] = useState(true);

//   if (loading) {
//     return 'Chargement...';
//   }

//   let quantityOrderPotDecrementHandle = '';
//   if (quantityOrderPot > 0) {
//     quantityOrderPotDecrementHandle = () => {
//       setquantityOrderPot(quantityOrderPot - 1);
//     };
//   }

//   let quantityOrderPotIncrementHandle = '';
//   if (quantityOrderPot < itemPot.stockquantityOrder) {
//     quantityOrderPotIncrementHandle = () => {
//       setquantityOrderPot(quantityOrderPot + 1);
//     };
//   }

//   let quantityOrderRootDecrementHandle = '';
//   if (quantityOrderPot > 0) {
//     quantityOrderRootDecrementHandle = () => {
//       setquantityOrderRoot(quantityOrderPot - 1);
//     };
//   }

//   let quantityOrderRootIncrementHandle = '';
//   if (quantityOrderRoot < itemRoot.stockquantityOrder) {
//     quantityOrderRootIncrementHandle = () => {
//       setquantityOrderRoot(quantityOrderRoot + 1);
//     };
//   }
//   return (
//     <>
//       {itemPot.PicturesItems &&
//         itemPot.PicturesItems.map((i) => (
//           <div key={i.id}>
//             <img src={i.picture} alt={name} />
//           </div>
//         ))}

//       <div>
//         <div>
//           <h4>{name.toUpperCase()}</h4>
//           <p>{itemPot.variety}</p>
//         </div>
//         <hr />
//         <div>
//           <p>Couleur: {itemPot.color}</p>
//           <p>Parfum: {itemPot.perfume}</p>
//           <p>Floraison: {itemPot.flowering}</p>
//           <p>Hauteur à maturité: {itemPot.size} cm</p>
//         </div>
//         <hr />
//         <p>
//           {itemPot.description && itemPot.description.split('_')[0]}
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
//                 <p>{parseFloat(itemPot.price).toFixed(2)} €</p>
//               </div>
//               <p>Livraison - novembre 2020</p>
//               <div>
//                 <p>Quantité</p>
//                 <div>
//                   <button onClick={quantityOrderPotDecrementHandle}>-</button>
//                   <input min="0" type="number" value={quantityOrderPot} />
//                   <button onClick={quantityOrderPotIncrementHandle}>+</button>
//                 </div>
//                 {/* <div>
//                   <CartConsumer>
//                     {(value) => {
//                       return <h1>{value}</h1>;
//                     }}
//                   </CartConsumer>
//                 </div> */}
//                 <button onClick={addPotToCart}>Ajouter au pannier</button>
//               </div>
//               <p>Ajouter à la liste de souhaits</p>
//             </div>
//           </div>
//           <div>
//             <img />
//             <div>
//               <div>
//                 <p>À Racines Nues</p>
//                 <p>{parseFloat(itemRoot.price).toFixed(2)} €</p>
//               </div>
//               <p>Livraison - novembre 2020</p>
//               <div>
//                 <p>Quantité</p>
//                 <div>
//                   <button onClick={quantityOrderRootDecrementHandle}>-</button>
//                   <input min="0" type="number" value={quantityOrderRoot} />
//                   <button onClick={quantityOrderRootIncrementHandle}>+</button>
//                 </div>
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
//             {itemPot.description &&
//               itemPot.description.split('_').map((para) => (
//                 <div key={para.idPara}>
//                   <p>{para}</p>
//                 </div>
//               ))}
//           </div>
//           <hr />
//           <div>
//             <h4>Plantations & Soins</h4>
//             {itemPot.plantationCare &&
//               itemPot.plantationCare.split('.').map((element) => (
//                 <div key={element.idElement}>
//                   <span>{element}</span>
//                 </div>
//               ))}
//           </div>
//           <hr />
//           <div>
//             <h4>Utilisations</h4>
//             {itemPot.idealFor &&
//               itemPot.idealFor.split('.').map((element) => (
//                 <div key={element.idElement}>
//                   <span>{element}</span>
//                 </div>
//               ))}
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
