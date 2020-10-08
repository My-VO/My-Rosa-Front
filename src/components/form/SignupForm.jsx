import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import useFrom from '../useForm';
import validate from '../validate/Signup.Validate';

const API = process.env.REACT_APP_API;

const SignupForm = () => {
  const {
    handleInputChange,
    handleFormSubmit,
    values,
    setValues,
    errors,
  } = useFrom(submit, validate);

  const history = useHistory();

  async function submit() {
    try {
      const res = await axios.post(`${API}/signup`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      if (res) {
        history.push('/account/login');
      }
    } catch (error) {
      setValues({
        ...values,
        errorMessage: error.response.data.description,
      });
      console.log(
        'Error signup : ',
        `${error.response.data.title} : ${error.response.data.description}`
      );
    }
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        noValidate
        method="POST"
        action={`${API}/signup`}
      >
        <div>
          {values.errorMessage && (
            <p className="error">{values.errorMessage}</p>
          )}
          <label>Prénom</label>
          <div>
            <input
              className={`${errors.firstName && 'inputError'}`}
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            ></input>
            {errors.confirmedPassword && (
              <p className="error">{errors.confirmedPassword}</p>
            )}
          </div>
        </div>
        <button type="submit">CRÉER UN COMPTE</button>
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
