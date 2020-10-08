import React from 'react';
import SignupForm from '../form/SignupForm';

const Signup = () => {
  return (
    <>
      <div>
        <h1>Créer un compte</h1>
      </div>
      <SignupForm />
      <p>
        Vous avez déjà un compte ?
        <a href="/account/login"> Connectez-vous ici</a>
      </p>
    </>
  );
};

export default Signup;
