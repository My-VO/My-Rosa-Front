import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { AuthContext } from '../contexts/AuthContext';
import useForm from '../useForm';
import validate from '../validate/Login.Validate';

const API = process.env.REACT_APP_API;

function LoginForm() {
  const {
    handleInputChange,
    handleFormSubmit,
    values,
    setValues,
    errors,
    // eslint-disable-next-line no-use-before-define
  } = useForm(submit, validate);
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  async function submit() {
    let result = {};
    try {
      result = await axios.post(`${API}/login`, {
        email: values.email,
        password: values.password,
      });

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
      setValues({
        ...values,
        errorMessage: error.response.data.description,
      });
      // eslint-disable-next-line no-console
      console.log(
        'Error login : ',
        `${error.response.data.title} : ${error.response.data.description}`
      );
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {values.errorMessage && <p className="error">{values.errorMessage}</p>}
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

        <button type="submit">ME CONNECTER</button>
      </form>
    </div>
  );
}

export default LoginForm;
