import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

// import { useHistory } from 'react-router-dom';

import AuthContext from '../context/auth';
import useFrom from '../useForm';
import validate from '../validate/Login.Validate';

const API = process.env.REACT_APP_API;

function LoginForm() {
  const { handleInputChange, handleFormSubmit, values, errors } = useFrom(
    submit,
    validate
  );
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  //   const initialState = {
  //     email: '',
  //     password: '',
  //     // isSubmitting: false,
  //     // errorMessage: null,
  //   };

  //   const [data, setData] = useState(initialState);

  //   const handleInputChange = (event) => {
  //     setData({
  //       ...data,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     setData({
  //       ...data,
  //       //   isSubmitting: true,
  //       //   errorMessage: null,
  //     });
  //     fetch(`${API}/signin`, {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: data.email,
  //         password: data.password,
  //       }),
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         throw res;
  //       })
  //       .then((resJson) => {
  //         dispatch({
  //           type: 'LOGIN',
  //           payload: resJson,
  //         });
  //       })
  //       .catch((error) => {
  //         setData({
  //           ...data,
  //           isSubmitting: false,
  //           errorMessage: error.message || error.statusText,
  //         });
  //       });
  //   };

  async function submit() {
    let result = {};
    try {
      result = await axios.post(`${API}/signin`, {
        email: values.email,
        password: values.password,
      });

      console.log('result : ', result);

      if (result.status === 200) {
        dispatch({
          type: 'LOGIN',
          payload: result,
        });
        history.push('/');
        return;
      }
      throw result;
    } catch (error) {
      console.log('Error login : ', error);
    }
  }

  //   const history = useHistory();
  //   const logOut = async (event) => {
  //     event.preventDefault();
  //     dispatch({
  //       type: 'LOGOUT',
  //     });
  //     history.push('/');
  //   };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            value={values.email}
            onChange={handleInputChange}
            name="email"
            id="email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
            id="password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </label>

        {/* {errors.errorMessage && (
          <span className="form-error">{errors.errorMessage}</span>
        )} */}

        <button type="submit">ME CONNECTER</button>
        {/* <button disabled={values.isSubmitting}>
          {values.isSubmitting ? 'Loading...' : 'Login'}
        </button> */}
      </form>

      {/* <a href="/account/login" onClick={logOut}>
        Déconnexion
      </a>

      <a href="/account/signup">Créer un compte</a> */}
    </div>
  );
}

export default LoginForm;
