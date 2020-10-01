import React, { useState, useContext } from 'react';

import AuthContext from '../context/auth';

const API = process.env.REACT_APP_API;

function Login() {
  const dispatch = useContext(AuthContext);

  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    fetch(`${API}/signin`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: data.email, password: data.password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: 'LOGIN',
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusTest,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            value={data.email}
            onChange={handleInputChange}
            name="email"
            id="email"
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
            id="password"
          />
        </label>

        {data.errorMessage && (
          <span className="form-error">{data.errorMessage}</span>
        )}

        <button disabled={data.isSubmitting}>
          {data.isSubmitting ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
