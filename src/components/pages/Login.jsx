import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import LoginForm from "../form/LoginForm"

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  const history = useHistory();
  const logOut = async (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  };

  if (!state.isAuthenticated) {
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
      </>
    );
  }

  return (
    <>
      <h3>
        Bonjour{' '}
        {state.user &&
          `${state.user.first_name} ${state.user.last_name}`.toUpperCase()}
      </h3>
      <ul>
        <li>
          <Link to="/account/login/user/info">Mes informations</Link>
        </li>
        <li>
          <Link to="/orders">Mes commandes</Link>
        </li>
        <li>
          <a href="/account/login" onClick={logOut}>
            Se déconnecter
          </a>
        </li>
      </ul>
    </>
  );
};

export default Login;
