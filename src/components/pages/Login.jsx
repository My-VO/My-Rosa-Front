import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

import LoginForm from "../form/LoginForm"

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();
  const logOut = async (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  };
  return (
    <>
      <div>
        <h1>Me connecter</h1>
      </div>
      <LoginForm />

      <p>
        Vous n'avez pas de compte ?
        <a href="/account/signup"> Créer un compte</a>
      </p>

      <a href="/account/login" onClick={logOut}>
        Déconnexion
      </a>
    </>
  );
};

export default Login;
