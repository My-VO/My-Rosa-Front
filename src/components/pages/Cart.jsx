// import React, { useContext, useState } from 'react';

// import { CartContext } from '../contexts/CartContext';

// const Cart = () => {
//   const [cart, setCart] = useContext(CartContext);

//   console.log('cart : ', cart);

//   let quantityPot = 0;

//   let quantityRoot = 0;

//   let totalPricePot = 0;

//   let totalPriceRoot = 0;

//   const cartOPtions = Object.keys(cart).forEach(function (key) {
//     console.log('cart[key] : ', cart[key]);

//     if (cart[key].itemPot) {
//       quantityPot += parseFloat(cart[key].quantityPot);
//       totalPricePot += parseFloat(
//         cart[key].quantityPot * cart[key].itemPot.price
//       );
//     }

//     if (cart[key].itemRoot) {
//       quantityRoot += parseFloat(cart[key].quantityRoot);
//       totalPriceRoot += parseFloat(
//         cart[key].quantityRoot * cart[key].itemRoot.price
//       );
//     }
//   });

//   const quantity = parseFloat(quantityPot + quantityRoot);

//   const totalPrice = parseFloat(totalPricePot + totalPriceRoot);

//   const totalPriceFixed2 = totalPrice.toFixed(2);

//   return (
//     <div>
//       <span>Items in cart : {quantity}</span>
//       <br />
//       <span>Total price : {totalPriceFixed2}</span>
//     </div>
//   );
// };

// export default Cart;
