import React, { useState } from 'react';
import useFrom from '../useForm';
import validate from '../validate/Signup.Validate';

const SignupForm = () => {
  function submit() {
    console.log('Submittes successfully');
  }

  const { handleChange, handleSubmit, values, errors } = useFrom(
    submit,
    validate
  );

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Prénom</label>
          <div>
            <input
              className={`${errors.firstName && 'inputError'}`}
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
            ></input>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <label>Nom de famille</label>
          <div>
            <input
              className={`${errors.lastName && 'inputError'}`}
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
            ></input>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && 'inputError'}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            ></input>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.password && 'inputError'}`}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <label>Confirmation du mot de passe</label>
          <div>
            <input
              className={`${errors.confirmedPassword && 'inputError'}`}
              name="confirmedPassword"
              type="password"
              value={values.confirmedPassword}
              onChange={handleChange}
            ></input>
            {errors.confirmedPassword && (
              <p className="error">{errors.confirmedPassword}</p>
            )}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// form
// label / input for prénom
// label / input for nom
// label / input for email
// label / input for password
// label / input for confirmer password
// signup button

// handle changes
// handle submit

// custom react hook

// handle errors
// show erros if there are errors

export default SignupForm;
