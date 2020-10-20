import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Axios from 'axios';
import CartProducts from './CartProducts';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import useFrom from '../../useForm';
import validate from '../../validate/Commander.Validate';

const API = process.env.REACT_APP_API;

const Cart = () => {
  const { state: authState } = useContext(AuthContext);
  const { total, cartItems, itemCount } = useContext(CartContext);

  const {
    handleInputChange,
    handleFormSubmit,
    values,
    setValues,
    errors,
  } = useFrom(submit, validate);
  function submit() {
    console.log('Submit est success');
  }

  const history = useHistory();

  async function submit() {
    try {
      const res = await Axios.post(`${API}/orders`, cartItems, {
        headers: { Authorization: `Bearer ${authState.token}` },
      });

      if (res) {
        console.log('Submitted Succesfully');
        console.log('resultats', res);
        history.push('/orders');
      }
    } catch (error) {
      setValues({
        ...values,
        errorMessage: error.response.data.description,
      });

      if (error.response.status === 401) {
        setTimeout(() => {
          history.push('account/login');
        }, 2000);
      }
    }
  }

  console.log('authState :', authState);

  return (
    <>
      <form onSubmit={handleFormSubmit} noValidate>
        <div>
          <h1>Cart</h1>
          <p>This is the Cart Page.</p>
        </div>
        <div>
          <div>
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div>
                <h3>Le panier est vide</h3>
                <a href="/"> CONTINUER À FAIRE DES ACHATS</a>
              </div>
            )}
          </div>
          <hr />
          {cartItems.length > 0 && (
            <div>
              <p> Total Items</p>
              <h4>{itemCount}</h4>
              <p>Total Payment</p>
              <h3>{total}</h3>
              <hr />
              {values.errorMessage && (
                <p className="error">{values.errorMessage}</p>
              )}
              <button type="submit">COMMANDER</button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Cart;
