import React, { createContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import { AuthReducer } from './AuthReducer';

const API = process.env.REACT_APP_API;

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const result = await axios.get(`${API}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({
          type: 'LOAD_USER',
          payload: result.data,
        });
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
