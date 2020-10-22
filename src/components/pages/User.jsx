import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function User() {
  const { state } = useContext(AuthContext);
  return (
    <>
      <h2>Mes informations personnelles</h2>
      <h3>
        Prénom :{' '}
        {state.user &&
          state.user.first_name.charAt(0).toUpperCase() +
            state.user.first_name.slice(1)}
      </h3>
      <h3>
        Nom :{' '}
        {state.user &&
          state.user.last_name.charAt(0).toUpperCase() +
            state.user.last_name.slice(1)}
      </h3>
      <p>Email : {state.user && state.user.email}</p>
      <p>Votre numéro client : {state.user && state.user.id}</p>
    </>
  );
}

export default User;
